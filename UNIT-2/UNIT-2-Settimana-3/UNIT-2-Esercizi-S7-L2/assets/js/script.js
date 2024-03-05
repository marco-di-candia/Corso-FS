let input = document.getElementById("input");
let add = document.getElementById("add");
let show = document.getElementById("show");
let cancel = document.getElementById("delete");

array = [];
class Person {
    constructor(_name) {
        this.name = _name;
    }

}

add.addEventListener("click", e => {
    e.preventDefault();

    let person = new Person(input.value);
    array.push(person);
    localStorage.setItem("persona", JSON.stringify(array));

    stampa(person);
    input.value = ""

});
cancel.addEventListener("click", e => {
    e.preventDefault();

    localStorage.removeItem("persona");
    show.innerHTML = "";
});



const stampa = (oggetto) => {
    show.innerHTML += `<ul><li>${oggetto.name}</li></ul>`;

}

window.onload = () => {
    const personaString = localStorage.getItem("persona");
    if (personaString) {
        array = JSON.parse(personaString);
        array.forEach(elemnt => {
            stampa(elemnt);

        });
    }
}