const heroLeft = document.querySelector('.hero__left');
const heroRight = document.querySelector('.hero__right');
const heroLeftBg = document.querySelector('.hero__left__bg');
const navbarLink = document.querySelector('.navbar__items li a')

const tl = new TimelineMax();

tl.from(heroLeftBg, {duration: 1.5, width: 0,  ease: Power2.easeOut});
tl.from(".hero__left__text", {duration: 1, opacity: 0, x: 150});
tl.from (".hero__right", {duration: 1, opacity: 0, y: 100})

function delay (url) {
    heroLeft.classList.add('opaque');
    heroLeft.style.transition = "all 1s";

    setTimeout(() => {
        window.location = url
    }, 2000);


}