const hamburguer = document.querySelector('.header .nav-bar .lista-nav .hamburguer');
const mobileMenu = document.querySelector('.header .nav-bar .lista-nav ul');
const header = document.querySelector('.header.container');

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    const posicaoScroll = window.scrollY;
    if(posicaoScroll > 250){
        header.style.backgroundColor = "#2c3e40";
    }else{
        header.style.backgroundColor = "rgba(217, 217, 217, 0.024)";
    }
});