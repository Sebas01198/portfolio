const habilidadesNavbar = document.querySelector('.habilidades-navbar');
const habilidadesFrontendCard = document.querySelector('.habilidades__frontend');
const habilidadesNavbarClose = document.querySelector('.habilidades-navbar__btnClose');


//abrir navbar de habilidades con frontend
habilidadesFrontendCard.addEventListener('click', ()=>{
    habilidadesNavbar.style.display = 'block';
});
habilidadesNavbarClose.addEventListener('click', ()=>{
    habilidadesNavbar.style.display = 'none';
})