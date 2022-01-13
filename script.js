const hamburger = document.querySelector('.hamburger-link');
const mobileNav = document.querySelector('.nav-links');
const hamburgerIcon = document.querySelector('.hamburger-icon');

const btnNav = (() => {
    let count = 0;
    function slide(e) {
        hamburger.classList.toggle('isActive');
        if(count === 0) {
            mobileNav.classList.remove('display-none');
            hamburgerIcon.src = './images/icon-close.svg';
            count += 1;
            e.preventDefault();
            return;
        }
        if(count !== 0) {
            mobileNav.classList.add('display-none');
            hamburgerIcon.src = './images/icon-hamburger.svg';
            count -= 1;
            e.preventDefault();
            return;
        }       
    }
    return slide;
})();

hamburger.addEventListener('click', btnNav);