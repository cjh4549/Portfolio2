const hero = document.querySelector('.hero');
// const links = document.querySelectorAll('a');

hero.addEventListener('click', function(e){
    console.log(e.target);
})

document.querySelectorAll("*").forEach(i => i.addEventListener(
    "click",
    e => {
        console.log(e.target);
    }));