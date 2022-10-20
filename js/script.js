 function menuMobileActive() {

    const icon = document.querySelector('.icon')
    const menu = document.querySelector('.menu-mobile')

    function menuMobile() {
        icon.classList.toggle('icon-x')
        menu.classList.toggle('menu-ativo')
    }

icon.addEventListener('click', menuMobile)
    
 }  

 menuMobileActive();
   


 //

 const menuModular = document.querySelector('.header')

function menuHeader(){
    if(window.scrollY > 0){
        menuModular.classList.add('header-ativo')
    } else {
        menuModular.classList.remove ('header-ativo')
    }
}

 window.addEventListener('scroll', menuHeader)