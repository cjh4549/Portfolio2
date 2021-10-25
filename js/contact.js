const heroLeftBg = document.querySelector('.hero__left__bg');
const form = document.querySelector('.form');

heroLeftBg.style.height = '170vh';
heroLeftBg.style.width = '180vw';
heroLeftBg.style.transform = 'translateX(-10%)'; 

const vw = (width) => window.innerWidth * (width/100)
const vh = (height) => window.innerHeight * (height/100)

const tl = new TimelineMax();

tl.to(heroLeftBg, {duration: 1, x: -200, height: vh(150), width: vw(80), ease: Power2.easeInOut});
tl.to(form, {duration: 0.3, delay: 0, opacity: 1});