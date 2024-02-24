let header = document.querySelector("header");
let colorWhite = document.getElementById("start");
let colorButton = document.getElementById("start-1");
const cambiacolore = () => {
    if (window.scrollY > 496) {
        header.classList.add("coloreNuovo-header")
        colorButton.classList.add("coloreNuovo-button")
    } else {
        header.classList.remove("coloreNuovo-header")
        colorButton.classList.remove("coloreNuovo-button")
    }
}
window.addEventListener("scroll", cambiacolore)

// set interval M
let svg = document.querySelectorAll("[stroke-linecap]");
const M = () => {
    let random = Math.floor(Math.random() * svg.length)
    if (svg[random].style.opacity === "0") {
        svg[random].style.opacity = "0"
    } else {
        svg[random].style.opacity = "0"
    }
}
setInterval(M, 50)