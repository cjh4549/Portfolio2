const heroLeftBg = document.querySelector('.hero__left__bg');
const project = document.querySelector('.project');
const projectCard = document.querySelector('.project__mockup');
const projectOverlay = document.querySelector('.projectOverlay');
const projectText = document.querySelector('.project__text');

const vw = (width) => window.innerWidth * (width/100)
const vh = (height) => window.innerHeight * (height/100)

const tl = new TimelineMax();


tl.to(heroLeftBg, {duration: 1.2, delay: 0.3, x: -200, height: vh(170), width: vw(180), ease: Power2.easeInOut});
tl.to(project, {opacity: 1, duration: -2});
tl.to(projectOverlay, {height: 0, duration: 0.8, ease: Power2.easeOut});

project.addEventListener('mouseenter', (e) => {
    projectText.style.transition = 'all 0.8s';
    projectText.style.transform = 'perspective(500px) rotateX(50deg) rotateY(100deg) translateZ(100px)';
})

project.addEventListener('mouseleave', (e) => {
    projectText.style.transition = 'all 0.8s';
    projectText.style.transform = 'translateZ(0)';
})