// es-1
class Users {
    constructor(_name, _lastname, _age = 0, _location) {
        this.name = _name
        this.lastname = _lastname
        this.age = _age
        this.location = _location
    }

    compare(anotherUser) {
        if (this.age > anotherUser.age) {
            console.log(`${this.name} e piu grande di ${anotherUser.name}`);
        } else if (this.age < anotherUser.age) {
            console.log(`${anotherUser.name} e piu piccolo ${this.name}`);
        } else {
            console.log(`${this.name} e uguale a ${anotherUser.name}`);
        }
    }
}

let user1 = new Users("marco", "di canida", "21", "italia");
let user2 = new Users("francesco", "rock", "15", "italia");

user1.compare(user2)

// es-2

let namePed = document.getElementById("namePed")
let nameOwner = document.getElementById("nameOwner")
let species = document.getElementById("species")
let breed = document.getElementById("breed")
let add = document.getElementById("add")
let stampaQui = document.getElementById("stampaQui")

let pets = []

class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }


    compare(ownerName) {
        if (this.petName === ownerName) {
            true
        } else {
            false
        }
    }
}

add.addEventListener("click", e => {
    e.preventDefault()
    let newPet = new Pet(namePed.value, nameOwner.value, species.value, breed.value)
    pets.push(newPet)
    stampa()
    namePed.value = ""
    nameOwner.value = ""
    species.value = ""
    breed.value = ""
})

const stampa = () => {
    stampaQui.innerHTML = ""
    pets.forEach((pet) => {
        let createLi = document.createElement("li")
        createLi.innerText = `Nome Animale ${pet.petName} propietario ${pet.ownerName}`
        stampaQui.appendChild(createLi);
    })
}

