const heroLeftBg = document.querySelector('.hero__left__bg');

const vw = (width) => window.innerWidth * (width/100)
const vh = (height) => window.innerHeight * (height/100)

const tl = new TimelineMax();

tl.to(heroLeftBg, {duration: 2, delay: 0.3, x: -200, height: vh(170), width: vw(180), ease: Power2.easeOut});
