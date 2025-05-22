// Mobile Menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuBtn.querySelector('i').classList.toggle('bx-x');
});

// Close menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuBtn.querySelector('i').classList.remove('bx-x');
  });
});

// Products Data
const products = [
  {
    name: 'Lassi',
    image: 'images/lassi.png',
    price: 5,
    description: 'Traditional yogurt-based drink'
  },
  {
    name: 'Desi-Chai',
    image: 'images/tea.png',
    price: 5,
    description: 'Traditional Indian spiced tea'
  },
  {
    name: 'Coffee',
    image: 'images/coffee.png',
    price: 5,
    description: 'Premium brewed coffee'
  }
];

// Render Products
const productGrid = document.getElementById('productGrid');

products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="product-info">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price">$${product.price}</p>
      <button class="btn primary">Add to Cart</button>
    </div>
  `;
  
  productGrid.appendChild(card);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    contactForm.reset();
  });
}