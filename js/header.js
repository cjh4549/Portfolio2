const heroLeftBg = document.querySelector('.hero__left__bg');

const tl = new TimelineMax();

tl.from(heroLeftBg, {duration: 1.5, width: 0,  ease: Power2.easeOut});
tl.from(".hero__left__text", {duration: 1, opacity: 0, x: 150});
tl.from (".hero__right", {duration: 1, opacity: 0, y: 100})