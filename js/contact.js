const heroLeftBg = document.querySelector('.hero__left__bg');
const form = document.querySelector('.form');

heroLeftBg.style.height = '170vh';
heroLeftBg.style.width = '180vw';
heroLeftBg.style.transform = 'translateX(-10%)'; 

const vw = (width) => window.innerWidth * (width/100)
const vh = (height) => window.innerHeight * (height/100)

const tl = new TimelineMax();

tl.to(heroLeftBg, {duration: 1.2, delay: 0.3, x: -200, height: vh(150), width: vw(80), ease: Power2.easeInOut});
tl.from(form, {duration: 1, opacity: 0});