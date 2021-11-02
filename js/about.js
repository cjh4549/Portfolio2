const heroDescription = document.querySelector('.hero__description');
const h2 = document.querySelector('.hero__about h2');
const pia = document.querySelector('.hero__description--pia')
const development = document.querySelector('.hero__development');

const hamburgerNavBars = document.querySelector('.hamburgerNavBars');
const hamburgerNav = document.querySelector('.hamburgerNavMenu');
const hamburgerNavMenu = document.querySelectorAll('.hamburgerNavMenu__items > li');

const tl = new TimelineMax();

tl.from(h2, {duration: 0.5, opacity: 0, y: -30});
tl.from(heroDescription, {duration: 0.7, opacity: 0, x: 70});
tl.from(development, {duration: 0.7, opacity: 0, x: 50});
tl.from(pia, {duration: 1.6, opacity: 0, ease: Power2.easeOut});

hamburgerNavBars.addEventListener('click', function(){
    if (!hamburgerNavBars.classList.contains('active')) {
        hamburgerNavBars.classList.add('active');
        hamburgerNav.style.transform = 'translateX(-1.5rem)';
        hamburgerNav.style.transition = 'all 0.5s';
        hamburgerNavMenu.forEach(element => {
            element.style.opacity = '1';
        });
    } else {
        hamburgerNavBars.classList.remove('active');
        hamburgerNav.style.transform = 'translateX(0px)';
        hamburgerNavMenu.forEach(element => {
            element.style.opacity = '0';
        });
    }
})