// inizo js

let collona = document.getElementById("collona");
let numerodagenarare = document.getElementById("numerodagenarare");
let btn = document.getElementById("btn");
let numeritombola = document.getElementById("numeritombola")
document.getElementById("numerodagenarare");
const array = []


// genero umero e stampo a video 
const genero = () => {
    for (let i = 1; i <= 90; i++) {
        const ndiv = document.createElement("div")
        const nuospan = document.createElement("snap")
        nuospan.innerText = i;
        nuospan.classList.add("spanC")
        ndiv.classList.add("righa")
        ndiv.appendChild(nuospan)
        numeritombola.appendChild(ndiv)


    }
}
genero()


// dico al bottone di generare un numero random e stampare a video 

const evento = () => {

    btn.addEventListener("click", function (e) {
        e.preventDefault()
        let numrandom = Math.floor((Math.random() * 90) + 1);
        // numerodagenarare.innerText = numrandom
        if (array.includes(numrandom)) {
        } else {
            numerodagenarare.innerText = `il numero e ${numrandom}`
            array.push(numrandom)
            colora(numrandom)
        }


    })
}
evento()
const colora = (numrandom => {

    const tabellone = document.querySelectorAll('.righa');
    for (let i = 0; i < tabellone.length; i++) {
        if (parseInt(tabellone[i].innerText) === numrandom) {
            tabellone[i].classList.add('evidenziato');
        }
    }
})








