document.addEventListener("DOMContentLoaded", function () {
  // ✅ Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }

  // ✅ Prevent reloading the same page
  document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
      const currentPage = window.location.pathname.split('/').pop();
      const targetPage = this.getAttribute('href');

      if (currentPage === targetPage) {
        e.preventDefault(); // Stop reload
        document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ✅ Contact form validation (only runs on contact.html)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        e.preventDefault();
        alert("Please fill in all fields before submitting.");
      }
    });
  }
});