const btnMenu = document.querySelector('.header__btn-menu');
const navbarModal = document.querySelector('.navbar-modal');
const logotipo = document.querySelector('.header__logo')
const header = document.querySelector('.header')
const habilidadesNavbar = document.querySelector('.habilidades-navbar');
const habilidadesFrontendCard = document.querySelector('.habilidades__frontend');
const habilidadesNavbarClose = document.querySelector('.habilidades-navbar__btnClose');



//menu hamburguesa y sus funcionalidades
btnMenu.addEventListener('click', ()=>{
    navbarModal.classList.toggle('toggle');
    header.style.background = '#fff';
    logotipo.style.color = '#0078ff';
    btnMenu.style.color = '#000';
    
    if(navbarModal.classList.contains('toggle')){
        header.style.background = 'transparent';
        logotipo.style.color = '#fff';
        btnMenu.style.color = '#fff';
    }
});







//abrir navbar de habilidades con frontend
habilidadesFrontendCard.addEventListener('click', ()=>{
    habilidadesNavbar.style.display = 'block';
});
habilidadesNavbarClose.addEventListener('click', ()=>{
    habilidadesNavbar.style.display = 'none';
})