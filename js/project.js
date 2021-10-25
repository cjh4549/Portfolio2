const heroLeftBg = document.querySelector('.hero__left__bg');
const project = document.querySelector('.project');
const projectCard = document.querySelector('.project__card');
const projectOverlay = document.querySelector('.projectOverlay');
const projectTextContainer = document.querySelector('.project__text__container');
const projectText = document.querySelector('.project__text');
const projectHidden = document.querySelector('.project__text__hidden');
const laptopOpen = document.querySelector('.project__mockup__open');
const nextArrow = document.querySelector('.arrow');

const vw = (width) => window.innerWidth * (width/100)
const vh = (height) => window.innerHeight * (height/100)

const tl = new TimelineMax();

tl.to(heroLeftBg, {duration: 0.8, delay: 0.2, x: -200, height: vh(170), width: vw(180), ease: Power2.easeInOut});
tl.to(project, {opacity: 1, duration: -2});
tl.to(projectOverlay, {height: 0, duration: 0.5, ease: Power2.easeOut});
tl.from(projectText, {opacity: 0, duration: 0.8, y: 20, ease: Power2.easeInOut});


projectText.addEventListener('mouseenter', () => {
    projectText.style.transition = 'all 1s';
    projectText.style.transform = 'perspective(2000px) rotateX(10deg) rotateY(180deg) translateZ(50px)';
    projectText.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.2)';
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
    projectText.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.2)';
    projectText.style.opacity = '1';

    projectHidden.style.opacity = '0.2';
    projectHidden.style.transition = 'all 1s';
    projectHidden.style.transform = 'rotateX(0deg) rotateY(155deg) translateZ(50px)';
    projectHidden.style.right = '10%';
    projectHidden.style.top = '1%';
})


function delay (url) {

    setTimeout(() => {
        window.location = url
    }, 700);
}

