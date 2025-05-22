// Mobile Navigation
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.querySelector('i').classList.toggle('bx-menu');
  navToggle.querySelector('i').classList.toggle('bx-x');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove('active');
    navToggle.querySelector('i').classList.add('bx-menu');
    navToggle.querySelector('i').classList.remove('bx-x');
  }
});

// Products
const products = [
  {
    name: 'Lassi',
    image: 'https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/lassi.png',
    price: 5,
    description: 'Traditional yogurt-based drink'
  },
  {
    name: 'Desi-Chai',
    image: 'https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/tea.png',
    price: 5,
    description: 'Traditional Indian spiced tea'
  },
  {
    name: 'Coffee',
    image: 'https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/coffee.png',
    price: 5,
    description: 'Premium brewed coffee'
  }
];

// Render products
const productContainer = document.getElementById('productContainer');

products.forEach(product => {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
  
  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-image">
    <div class="product-info">
      <h3 class="product-title">${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <p class="product-price">$${product.price}</p>
      <button class="btn btn-primary">Add to Cart</button>
    </div>
  `;
  
  productContainer.appendChild(productCard);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu after clicking
      navMenu.classList.remove('active');
      navToggle.querySelector('i').classList.add('bx-menu');
      navToggle.querySelector('i').classList.remove('bx-x');
    }
  });
});