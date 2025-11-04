let cart = [];

function addToCart(item) {
  cart.push(item);
  document.getElementById("cart-count").innerText = cart.length;
  alert(item + " added to cart!");
  updateCart();
}

function toggleCart() {
  const modal = document.getElementById("cartModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    cartItems.appendChild(li);
  });
}

function clearCart() {
  cart = [];
  updateCart();
  document.getElementById("cart-count").innerText = "0";
}

function searchProduct() {
  const query = document.getElementById("searchInput").value;
  alert("Searching for: " + query);
}

// 
// Filter products by category
function filterCategory(category) {
    const allProducts = document.querySelectorAll(".product-card");
    allProducts.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
// 

let cart = [];

// Add to cart
function addToCart(item) {
  cart.push(item);
  document.getElementById("cart-count").innerText = cart.length;
  updateCart();
}

// Toggle cart
function toggleCart() {
  const modal = document.getElementById("cartModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

// Update cart items
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    cartItems.appendChild(li);
  });
}

// Clear cart
function clearCart() {
  cart = [];
  updateCart();
  document.getElementById("cart-count").innerText = "0";
}

// Search
function searchProduct() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const allProducts = document.querySelectorAll(".product-card");
  allProducts.forEach(card => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = name.includes(query) ? "block" : "none";
  });
}

// Filter by category
function filterCategory(category) {
  const allProducts = document.querySelectorAll(".product-card");
  const categoryButtons = document.querySelectorAll(".category-card");

  // Highlight active category
  categoryButtons.forEach(btn => btn.classList.remove("active"));
  event.currentTarget.classList.add("active");

  // Show/hide products
  allProducts.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}


// === Best Deals Slider ===
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }    
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active-dot");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].classList.add("active-dot");
  setTimeout(showSlides, 4000); // Change slide every 4 seconds
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}


// === Big Live Sale Countdown Timer ===
function startCountdown(durationInHours) {
    const endTime = new Date().getTime() + durationInHours * 60 * 60 * 1000;
  
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;
  
      if (distance < 0) {
        clearInterval(timer);
        document.querySelector('.countdown').innerHTML = "Sale Ended!";
        return;
      }
  
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);
  
      document.getElementById('hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
      document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }, 1000);
  }
  
  // Start a 5-hour countdown
  startCountdown(5);

  
//   
// === Stackly Ecommerce Smart Live Search ===

// Shared product catalog
const allProducts = [
    { name: "Samsung Smart TV", category: "Electronics", price: "₹45,999", image: "https://via.placeholder.com/80?text=TV" },
    { name: "Sony Headphones", category: "Electronics", price: "₹2,999", image: "https://via.placeholder.com/80?text=Headphones" },
    { name: "Men's Denim Jacket", category: "Fashion", price: "₹1,499", image: "https://via.placeholder.com/80?text=Jacket" },
    { name: "Women's Handbag", category: "Fashion", price: "₹1,299", image: "https://via.placeholder.com/80?text=Bag" },
    { name: "Silver Necklace", category: "Jewellery", price: "₹999", image: "https://via.placeholder.com/80?text=Necklace" },
    { name: "Sofa Set", category: "Home & Furniture", price: "₹25,499", image: "https://via.placeholder.com/80?text=Sofa" },
    { name: "Dinner Plate Set", category: "Home & Kitchen", price: "₹699", image: "https://via.placeholder.com/80?text=Plates" },
    { name: "Organic Face Cream", category: "Beauty Products", price: "₹499", image: "https://via.placeholder.com/80?text=Cream" },
    { name: "Basmati Rice 5kg", category: "Food", price: "₹599", image: "https://via.placeholder.com/80?text=Rice" },
    { name: "Bluetooth Speaker", category: "Electronics", price: "₹1,999", image: "https://via.placeholder.com/80?text=Speaker" },
    { name: "Mixer Grinder", category: "Home & Kitchen", price: "₹2,299", image: "https://via.placeholder.com/80?text=Mixer" },
    { name: "Gold Plated Earrings", category: "Jewellery", price: "₹1,199", image: "https://via.placeholder.com/80?text=Earrings" },
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");
  
    if (!searchInput || !searchResults) return;
  
    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase().trim();
      searchResults.innerHTML = "";
  
      if (query === "") {
        searchResults.style.display = "none";
        return;
      }
  
      const matches = allProducts.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
  
      if (matches.length === 0) {
        searchResults.innerHTML = `<div>No products found</div>`;
      } else {
        matches.forEach(product => {
          const div = document.createElement("div");
          div.innerHTML = `
            <img src="${product.image}" alt="">
            <div class="search-info">
              <span class="name">${product.name}</span>
              <span class="category">${product.category}</span>
              <span class="price">${product.price}</span>
            </div>
          `;
          div.addEventListener("click", () => {
            // Store product name for redirect search
            localStorage.setItem("searchQuery", product.name);
            window.location.href = "products.html";
          });
          searchResults.appendChild(div);
        });
      }
  
      searchResults.style.display = "block";
    });
  
    // Hide dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!searchResults.contains(e.target) && e.target !== searchInput) {
        searchResults.style.display = "none";
      }
    });
  });
  