const hamburger = document.querySelector('.hamburger');
const navbarItems = document.querySelector('.navbar__items');

const hamburgerMenu = document.querySelector('.fa-bars');
const hamburgerX = document.querySelector('.fa-times');

hamburger.addEventListener('click', function(){
    if (!navbarItems.classList.contains('hamburgerOpen')) {
        navbarItems.classList.add('hamburgerOpen')
        hamburgerMenu.style.opacity = '0';
        hamburgerMenu.style.transition = 'all 0.3s';
        hamburgerX.style.opacity = '1';
        hamburgerX.style.transition = 'all 0.3s';
    } else if (navbarItems.classList.contains('hamburgerOpen')) {
        navbarItems.classList.remove('hamburgerOpen');
        hamburgerMenu.style.opacity = '1';
        hamburgerX.style.opacity = '0';
        hamburgerX.style.transition = 'all 0s';
    }
})