/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
// const pets = ['dog', 'cat', 'hamster', 'redfish']

// console.log(pets[0]);
// console.log(pets[1]);
// console.log(pets[2]);
// console.log(pets[3]);





/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
// console.log(pets.sort());








/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets",
     questa volta in ordine invertito.
*/
// console.log(pets.reverse());








/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
// pets.splice(1,0, "redfish")

// pets.splice(0,1)
// pets.splice(0, 0, "redfish");
// pets.splice(3,1)
// pets.splice(3, 0, "dog");
// console.log(pets);



// console.log(pets);




/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi
    una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars[0].licensePlate = "092910kl"
cars[1].licensePlate = "092910kl"
cars[2].licensePlate = "092910kl"
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars",
    rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newCar = {
  brand: "audi",
  model: "a4",
  color: "red"
}

function aggiungi(newogg) {
  cars.push(newCar)
  return newogg
}

// delete cars[0].trims
// delete cars[1].trims
// delete cars[2].trims
aggiungi()






/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà
    "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims)



}
console.log(justTrims[0]);
console.log(justTrims[1]);
console.log(justTrims[2]);







/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi
   in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/



// for (let i = 0; i < cars.length; i++) {
//   if ( cars[i].color.indexOf(0) === "b") {
//     console.log("fizz");
//   } else {
//     console.log("buzz");
//   }

// }

for (let i = 0; i < cars.length; i++) {
  const primalettera = cars[i].color.charAt(0); 
  if (primalettera === "b") {
    console.log("fizz");
  }else{
    console.log("buzz");
  }
}










/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico
    fino al raggiungimento del numero 32.
*/

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch,
    genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
