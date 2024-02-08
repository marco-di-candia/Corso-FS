let myinput = document.getElementById("myinput")
let add = document.getElementById("add")
let contenuto = document.getElementById("contenuto")

let nuovoli;
array = [];


add.addEventListener("click", function (e) {
    e.preventDefault

    if (myinput.value == "") {
        alert("devi inserire un campo")
        return;
    }

    inserisci()
    genero()

})

const inserisci = () => {
    nuovoli = myinput.value;
    array.push(nuovoli);
    console.log(array);
}


function genero() {
    contenuto.innerHTML = '';
    array.forEach((element, index) => {
        contenuto.innerHTML += `<li>${element}${index}s</li>`
    });
    myinput.value = ""

}






