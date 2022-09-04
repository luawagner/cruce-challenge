window.addEventListener("load", () => {

const btn_subir = document.getElementById("btn_subir")
btn_subir.addEventListener('click', ()=>{
    window.scrollTo(0,0)
})
/* pop-up */

const cerrarPopUp = document.querySelector('.close')
const ventanaModal = document.querySelector(".pop-up")
cerrarPopUp.addEventListener("click", ()=>{
ventanaModal.style.display = "none";
})
/* buscar */

    const btnSearch = document.querySelector(".btn-search");
    btnSearch.addEventListener("mouseover", () => {
      document.querySelector(".buscador-desk").classList.toggle("show-buscador");
    });
    const buscador = document.querySelector(".buscador-desk");
    buscador.addEventListener("mouseover", () => {
      buscador.classList.toggle("show-buscador");
    });
})  
