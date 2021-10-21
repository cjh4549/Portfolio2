const heroDescription = document.querySelector('.hero__description');
const h2 = document.querySelector('.hero__about h2');
const pia = document.querySelector('.hero__description__img');

const tl = new TimelineMax();

tl.from(h2, {duration: 0.8, opacity: 0, y: -50});
tl.from(heroDescription, {duration: 1, opacity: 0, x: 150});
tl.from(pia, {duration:1, opacity: 0});