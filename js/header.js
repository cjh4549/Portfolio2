
const beigeOverlay = document.querySelector('.beigeOverlay');
const whiteOverlay = document.querySelector('.whiteOverlay');
const heroLeftBg = document.querySelector('.hero__left__bg');
const heroRight = document.querySelector('.hero__right');
const navbarLink = document.querySelector('.navbar__items li a')

const tl = new TimelineMax();

// Animation on initial load

tl.from(heroLeftBg, {duration: 1.5, width: 0,  ease: Power2.easeOut});
tl.from(".hero__left__text", {duration: 1, opacity: 0, x: 150});
tl.from (".hero__right", {duration: 1, opacity: 0, y: 100})


// Delay on links 

function delay (url) {

    beigeOverlay.style.opacity = 1;
    beigeOverlay.style.transition = "all 1s";
    whiteOverlay.style.height = "150%";
    whiteOverlay.style.transition = "all 1s ease";

    setTimeout(() => {
        window.location = url
    }, 1000);


}