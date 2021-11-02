const heroLeftBg = document.querySelector('.hero__left__bg');
const project = document.querySelector('.project');
const projectCard = document.querySelector('.project__card');
const projectOverlay = document.querySelector('.projectOverlay');
const projectTextContainer = document.querySelector('.project__text__container');
const projectText = document.querySelector('.project__text');
const projectHidden = document.querySelector('.project__text__hidden');
const laptopOpen = document.querySelector('.project__mockup__open');
const nextArrow = document.querySelector('.arrow');

// Hamburger
const hamburgerNavBars = document.querySelector('.hamburgerNavBars');
const hamburgerNav = document.querySelector('.hamburgerNavMenu');
const hamburgerNavMenu = document.querySelectorAll('.hamburgerNavMenu__items > li');

const vw = (width) => window.innerWidth * (width/100)
const vh = (height) => window.innerHeight * (height/100)

const tl = new TimelineMax();

tl.to(heroLeftBg, {duration: 0.8, delay: 0.2, x: -200, height: vh(170), width: vw(180), ease: Power2.easeInOut});
tl.to(project, {opacity: 1, duration: -2});
tl.to(projectOverlay, {height: 0, duration: 0.5, ease: Power2.easeOut});
tl.from(projectText, {opacity: 0, duration: 0.8, y: 20, ease: Power2.easeInOut});


projectText.addEventListener('mouseenter', () => {
    const cardFlip = function() {
        projectText.style.transition = 'all 1s';
        projectText.style.transform = 'perspective(2000px) rotateX(10deg) rotateY(180deg) translateZ(50px)';
        projectText.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.2)';
        projectText.style.opacity = '0.1';
    }

    cardFlip();
    
    projectHidden.style.transition = 'all 1s';
    projectHidden.style.transform = 'perspective(2000px) rotateX(0deg) rotateY(360deg) translateZ(50px)';
    projectHidden.style.opacity = '1';
    projectHidden.style.right = '55%';
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

// Hamburger Animations
hamburgerNavBars.addEventListener('click', function(){
    if (!hamburgerNavBars.classList.contains('active')) {
        hamburgerNavBars.classList.add('active');
        hamburgerNav.style.transform = 'translateX(-1.5rem)';
        hamburgerNav.style.transition = 'all 0.5s';
        hamburgerNavMenu.forEach(element => {
            element.style.opacity = '1';
        });
    } else {
        hamburgerNavBars.classList.remove('active');
        hamburgerNav.style.transform = 'translateX(0px)';
        hamburgerNavMenu.forEach(element => {
            element.style.opacity = '0';
        });
    }
})


function delay (url) {

    setTimeout(() => {
        window.location = url
    }, 150);
}

