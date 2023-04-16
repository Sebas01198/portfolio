const btnMenu = document.querySelector('.header__btn-menu');
const navbarModal = document.querySelector('.navbar-modal');
const navegacion = document.querySelector('.navbar');
const header = document.querySelector('.header')
const habilidadesModal = document.querySelector('.habilidades-modal');
const habilidadesFrontendCard = document.querySelector('.habilidades__frontend');
const btnCloseModalFrontend = document.querySelector('.habilidades-modal__btnClose-front');
const btnCloseNavbarModal = document.querySelector('.navbar-modal__btnClose');
const body = document.querySelector('body');




// funcion al dar scroll header
window.addEventListener('scroll', () => {
    header.classList.toggle('scroll', window.scrollY > 0);
    navegacion.classList.toggle('scroll', window.scrollY > 0);
});

//menu hamburguesa y sus funcionalidades
btnMenu.addEventListener('click', ()=>{
    navbarModal.style.display = "flex";
    body.style.overflow = "hidden";
});
btnCloseNavbarModal.addEventListener('click', ()=>{
    navbarModal.style.display = "none";
    body.style.overflow = "auto";
});


//despliegue de habilidades frontend
habilidadesFrontendCard.addEventListener('click', ()=>{
    habilidadesModal.style.display = 'block';
    // window.scrollTo(0, 0);
    body.style.overflow = "hidden";
    
});
btnCloseModalFrontend.addEventListener('click', ()=>{
    habilidadesModal.style.display = 'none';
    body.style.overflow = "auto";
    
  
})














