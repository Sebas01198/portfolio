
const btnMenu = document.querySelector('.header__btn-menu');
const navbarModal = document.querySelector('.navbar-modal');
const navegacion = document.querySelector('.navbar');
const header = document.querySelector('.header')
const habilidadesModal = document.querySelector('.habilidades-modal');
const habilidadesFrontendCard = document.querySelector('.habilidades__frontend');
const btnCloseModalFrontend = document.querySelector('.habilidades-modal__btnClose-front');
const btnCloseNavbarModal = document.querySelector('.navbar-modal__btnClose');
const body = document.querySelector('body');
const habilidadesBackendCard = document.querySelector('.habilidades__backend');
const habilidadesBackendModal = document.querySelector('.habilidades-backend');
const btnCloseModalBackend = document.querySelector('.habilidades-backend__btnClose-back');

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
    
  
});
//despliegue habilidades backend
habilidadesBackendCard.addEventListener('click', ()=>{
    habilidadesBackendModal.style.display = 'block';
    // window.scrollTo(0, 0);
    body.style.overflow = "hidden";
    
});
btnCloseModalBackend.addEventListener('click', ()=>{
    habilidadesBackendModal.style.display = 'none';
    body.style.overflow = "auto";
    
  
});


import proyectos from "./proyectos.js";
let cardsProyectos = proyectos.slice(0,6);
cardsProyectos.forEach(product => {
    const {id,imagen,tecnologias, link} = product;
    let containerProyectos = document.querySelector('.cards');
    
    containerProyectos.innerHTML += `
                <div class="cards__content" id = "${id}">
                    <img class="cards__img" src="${imagen}" alt="">
                    <h3 class="cards__tech">${tecnologias}</h3>
                    <a class="cards__button" href="${link}" target="_blank">Ver</a>
                </div>
    `
})



















