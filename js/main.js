//nav
document.addEventListener('DOMContentLoaded', function () {
  const navArea = document.querySelector('.navarea');
  const menuLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  // Change nav background on scroll
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      navArea.classList.add('scrolled');
    } else {
      navArea.classList.remove('scrolled');
    }
  });

  // Highlight active menu item based on scroll position
  window.addEventListener('scroll', function () {
    let currentSection = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) {
        currentSection = section.getAttribute('id');
      }
    });

    menuLinks.forEach((link) => {
      link.classList.remove('active-menu');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active-menu');
      }
    });
  });
});


//owl
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1.5 }, // Mobile
      576: { items: 2 }, // Small screens
      768: { items: 3 }, // Medium screens
      1024: { items: 4 }, // Large screens
      1200: { items: 4.5 }, // Desktop
    },
  });
});


//popup
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.popup-trigger');
  const popups = document.querySelectorAll('.popup');

  // Open popup
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const popupId = button.getAttribute('data-popup');
      const popup = document.getElementById(popupId);
      if (popup) {
        popup.style.display = 'flex';
      }
    });
  });

  // Close popup
  popups.forEach(popup => {
    const closeBtn = popup.querySelector('.close');
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });

    // Close popup when clicking outside the content
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });
  });
});


  new WOW().init();