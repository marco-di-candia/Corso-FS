let header = document.querySelector("header")
let colorWhite = document.getElementById("start")
let colorButton = document.getElementById("start-1")
let headertop = header.offsetHeight;
let colorWhitebottom = colorWhite.offsetTop + colorWhite.offsetHeight;
const cambiacolore = () =>{
    if (window.scrollY > colorWhitebottom - headertop) {
        header.classList.add("coloreNuovo-header")
        colorButton.classList.add("coloreNuovo-button")
    }else{
        header.classList.remove("coloreNuovo-header")
        colorButton.classList.remove("coloreNuovo-button")
    }
}
window.addEventListener("scroll" , cambiacolore)
