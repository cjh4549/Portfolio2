const heroDescription = document.querySelector('.hero__description');
const h2 = document.querySelector('.hero__about h2');
const pia = document.querySelector('.hero__description--pia')
const development = document.querySelector('.hero__development');

const tl = new TimelineMax();


tl.from(h2, {duration: 0.5, opacity: 0, y: -30});
tl.from(heroDescription, {duration: 0.7, opacity: 0, x: 70});
tl.from(development, {duration: 0.7, opacity: 0, x: 50});
tl.from(pia, {duration: 1.6, opacity: 0, ease: Power2.easeOut});

    