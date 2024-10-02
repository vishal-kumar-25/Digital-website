document.addEventListener('DOMContentLoaded', function () {
  
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // External navigation for dropdown items
    document.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', function () {
        const destination = this.textContent.trim();
        if (destination === 'About Us') {
          window.location.href = 'about.html';
        } else if (destination === 'Services') {
          window.location.href = 'services.html';
        } else if (destination === 'Career') {
          window.location.href = 'career.html';
        }
      });
    });
  
    // Search bar functionality
    document.querySelector('form[role="search"]').addEventListener('submit', function (e) {
      e.preventDefault();
      const query = document.querySelector('input[type="search"]').value;
      if (query) {
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
      }
    });
  
    // Back-to-top arrow smooth scroll
    document.getElementById('a').addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
  });
  