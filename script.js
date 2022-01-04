const hamburger = document.querySelector('.hamburger-link');
const mobileNav = document.querySelector('.nav-links');

hamburger.addEventListener('click', function(e) {
   mobileNav.classList.remove('display-none');
   e.preventDefault();
});