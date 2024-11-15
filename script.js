document.addEventListener('DOMContentLoaded', function() {
    const products = [
      {
        name: 'Lassi',
        image: 'https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/lassi.png',
        price: 5,
        backgroundColor: '#03A9F4'
      },
      {
        name: 'Desi-Chai (Tea)',
        image: 'https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/tea.png',
        price: 5,
        backgroundColor: '#E91E63'
      },
      {
        name: 'Coffee',
        image: 'https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/coffee.png',
        price: 5,
        backgroundColor: '#9BDC28'
      }
      // Add more products as needed
    ];
  
    const container = document.getElementById('product-count');
  
    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('kard');
  
      card.innerHTML = `
        <div class="imgbox">
          <img class="image" src="${product.image}" alt="${product.name}">
        </div>
        <div class="contentbox">
          <h2>${product.name}</h2>
          <div class="price">
            <h3>price :</h3>
            <span>$</span><span>${product.price}</span>
          </div>
          <a href="#">Buy Now</a>
        </div>
      `;
  
      card.style.backgroundColor = product.backgroundColor;
      container.appendChild(card);
    });
  });
  