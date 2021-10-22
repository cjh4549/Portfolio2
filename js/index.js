
const beigeOverlay = document.querySelector('.beigeOverlay');
const whiteOverlay = document.querySelector('.whiteOverlay');
const heroLeftBg = document.querySelector('.hero__left__bg');
const heroRight = document.querySelector('.hero__right');
const navbarLink = document.querySelector('.navbar__items li a')

const tl = new TimelineMax();

const vw = (width) => window.innerWidth * (width/100)
const vh = (height) => window.innerHeight * (height/100)


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

    if (url == './html/contact.html') {
        tl.to(heroLeftBg, {duration: 1.2, delay: 0.3, x: -200, zIndex: 1000, height: vh(170), width: vw(180), ease: Power2.easeInOut});
    }

    setTimeout(() => {
        window.location = url
    }, 1500);

}