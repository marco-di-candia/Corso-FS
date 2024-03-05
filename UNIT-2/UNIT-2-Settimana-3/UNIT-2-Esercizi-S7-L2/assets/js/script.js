let input = document.getElementById("input");
let add = document.getElementById("add");
let show = document.getElementById("show");
array = [];
class Person {
    constructor(_name) {
        this.name = _name;
    }

}

add.addEventListener("click", e => {
    e.preventDefault();

    let person = new Person(input.value);
    localStorage.setItem("persona", JSON.stringify(person));

    stampa(person);
    input.value = ""

});


const stampa = (oggeto) => {
    let p = document.createElement("ul");
    p.innerHTML = `<li>${oggeto.name}</li>`;
    show.appendChild(p);

}

localStorage.removeItem("p");
localStorage.removeItem("c");