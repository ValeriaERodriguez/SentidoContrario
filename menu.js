const hamb = document.querySelector('.hamb');
const menu = document.querySelector('.menu-navegation');

//console.log(menu);


hamb.addEventListener('click', ()=>{
    menu.classList.toggle("spread");
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu &&
    e.target != hamb ){

        menu.classList.toggle("spread")
    }

})