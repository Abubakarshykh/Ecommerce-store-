// Mobile menu toggle
document.getElementById('menu-btn').addEventListener('click', function() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Product filtering functionality
document.addEventListener('DOMContentLoaded', function() {
  const categoryLinks = document.querySelectorAll('.category-link');
  const productCards = document.querySelectorAll('.product-card');

  categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links
      categoryLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      const category = this.dataset.category;
      
      // Filter products
      productCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
