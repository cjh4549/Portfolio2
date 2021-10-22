const heroDescription = document.querySelector('.hero__description');
const h2 = document.querySelector('.hero__about h2');
const arrow = document.querySelector('.hero__description__arrow');
const pia = document.querySelector('.hero__description--pia')
const development = document.querySelector('.hero__development');

const tl = new TimelineMax();

tl.from(h2, {duration: 0.8, opacity: 0, y: -50});
tl.from(heroDescription, {duration: 1, opacity: 0, x: 150});
tl.from(development, {duration: 1, opacity: 0, x: 100});
tl.from(arrow, {duration: 1, opacity: 0});
tl.from(pia, {duration: 2, opacity: 0, ease: Power2.easeOut});