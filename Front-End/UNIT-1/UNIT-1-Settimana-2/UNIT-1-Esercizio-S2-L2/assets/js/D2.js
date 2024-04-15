/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let numero1=10
// let numero2=1

// if (numero1 > numero2 ) {
//   document.getElementById("risultato").innerHTML="e piu grande questo:" + numero1;
// }
// else if(numero2 > numero1){
//   document.getElementById("risultato").innerHTML="e piu piccolo:" + numero1;
// }
// else{
//   document.getElementById("risultato").innerHTML="sono uguali";
// }



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let numero = 10

// if (numero !== 5) {
//   console.log("not equal");
// }
// else{
//   console.log("il numero e :",numero);
// }




/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let number = 59


// if (number % 5 === 0) {

//   console.log("\"divisibile per 5\"");

// }else{
//   console.log("non e divisibile per 5");
// }




/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

// /* SCRIVI QUI LA TUA RISPOSTA */

let number = 20
let number1 = 12

if (number === 8 || number1 === 8 || number + number1 === 8 || number - number1 === 8 || number1 - number === 8) {
  console.log("funziona");
} else {
  console.log("non funziona");
}





/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


// let totalShoppingCart = 40
// let spedizione = 10

// if (totalShoppingCart >= 50) {
//     console.log("spedizione gratuita[ON]- checkout:",totalShoppingCart);
// }else if (totalShoppingCart < 50) {
//   console.log("spedizione 10euro,checkout:",(totalShoppingCart + spedizione));
// }else{
//   console.log(totalShoppingCart);
// }




/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se 
  le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let blackfriday = 0.8
let totalShoppingCart = (49 * blackfriday);
let spedizione = 10


if (totalShoppingCart >= 50) {
  console.log("spedizione gratuita[ON]- checkout:", totalShoppingCart);
} else if (totalShoppingCart < 50) {
  console.log("spedizione 10+euro,checkout:", totalShoppingCart + spedizione,);
} else {
  console.log(totalShoppingCart);
}






/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */


let a = 70
let e = 80
let i = 40

if (a >= e) {

 if(a >= i) {
  console.log(a, e, i);


} else if (i >= e) {
  console.log(i, a, e);

} else {
  console.log(a, i, e);
}

} 

if (e >= a) {
  console.log(i, e, a);

  if (i >= a) {
  console.log(e, i, a);


} else {
  console.log(e, a, i);
}
}







/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let verifica = true

if (typeof verifica === 'number' || verifica === "string") {
  console.log("e un numero");
} else {
  console.log("non e un numero");
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero = 20

if (numero % 2 === 0) {
  console.log("e bari", numero);
} else {
  console.log("e dispari:", numero);
}





/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 4

if (val < 5) {
  console.log("Meno di 5");

} else if (val < 10) {
  console.log("Meno di 10");

} else {
  console.log("Uguale a 10 o maggiore");
}






/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city",
   il cui valore sarà "Toronto".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: ['John', "lip"],
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"
console.log(me);






/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName
console.log(me);
me.name.pop()
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop()
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let card = []

card.push(1)
card.push(2)
card.push(3)
card.push(4)
card.push(5)
card.push(6)
card.push(7)
card.push(8)
card.push(9)
card.push(10)

console.log(card);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
card[10] = "cento"
delete card[4]
console.log(card);