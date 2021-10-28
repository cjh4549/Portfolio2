// 1400px below - Make below functions to work

const media1400 = window.matchMedia('(max-width: 1400px)');

const heroRightCircle = document.querySelector('.hero__right__circle');


if (media1400.matches) {
    function delay (url) {

        beigeOverlay.style.opacity = 1;
        beigeOverlay.style.transition = "all 0.2s";
        heroRightCircle.style.opacity = 0;
        heroRightCircle.style.transition = 'all 0.2s';
    
        if (url == './html/contact.html') {
            tl.to(heroLeftBg, {duration: 1.2, delay: 0.3, x: -200, zIndex: 1000, height: vh(170), width: vw(180), ease: Power2.easeInOut});
        }
    
        setTimeout(() => {
            window.location = url
        }, 500);
    
    }
}