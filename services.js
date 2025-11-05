// Reuse your fade-up intersection animations here
document.addEventListener('DOMContentLoaded', () => {
    const fadeEls = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(el => observer.observe(el));
  });

  
  // ===== COUNTER ANIMATION =====
const counters = document.querySelectorAll('.counter');
const speed = 150; // smaller = faster animation

const animateCounters = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 25);
        } else {
          counter.innerText = target.toLocaleString(); // add commas
        }
      };
      updateCount();
      observer.unobserve(counter); // animate only once
    }
  });
};

const observer = new IntersectionObserver(animateCounters, { threshold: 0.6 });
counters.forEach(counter => observer.observe(counter));
