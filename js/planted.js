const heroLeftBg = document.querySelector('.hero__left__bg');

heroLeftBg.style.height = '170vh';
heroLeftBg.style.width = '180vw';
heroLeftBg.style.transform = 'translateX(-10%)'; 

const project = document.querySelector('.project');
const projectCard = document.querySelector('.project__card');
const projectOverlay = document.querySelector('.projectOverlay');
const projectText = document.querySelector('.project__text');
const projectHidden = document.querySelector('.project__text__hidden');

const vw = (width) => window.innerWidth * (width/100)
const vh = (height) => window.innerHeight * (height/100)

const tl = new TimelineMax();

tl.to(project, {opacity: 1, duration: -2});
tl.to(projectOverlay, {height: 0, duration: 0.8, ease: Power2.easeOut});
tl.from(projectText, {opacity: 0, duration: 1, y: 50, ease: Power2.easeInOut});


projectText.addEventListener('mouseenter', () => {
    projectText.style.transition = 'all 1s';
    projectText.style.transform = 'perspective(2000px) rotateX(10deg) rotateY(180deg) translateZ(50px)';
    projectText.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.0)';
    projectText.style.opacity = '0.1';
    
    projectHidden.style.opacity = '1';
    projectHidden.style.transition = 'all 1s';
    projectHidden.style.zIndex = '100';
    projectHidden.style.transform = 'perspective(2000px) rotateX(0deg) rotateY(355deg) translateZ(50px)';
    projectHidden.style.right = '50%';
    projectHidden.style.top = '5%';
})

projectCard.addEventListener('mouseleave', () => {
    projectText.style.transition = 'all 1s';
    projectText.style.transform = 'rotateX(0deg) rotateY(0deg)';
    projectText.style.boxShadow = '20px 10px 20px rgba(0, 0, 0, 0.1)';
    projectText.style.opacity = '1';

    projectHidden.style.opacity = '0.2';
    projectHidden.style.transition = 'all 1s';
    projectHidden.style.transform = 'rotateX(0deg) rotateY(155deg) translateZ(50px)';
    projectHidden.style.right = '10%';
    projectHidden.style.top = '1%';
})