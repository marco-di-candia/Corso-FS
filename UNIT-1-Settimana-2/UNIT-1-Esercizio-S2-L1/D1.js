/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/




/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
/* SCRIVI QUI LA TUA RISPOSTA

1:string praticamente e il testo e si mette tra virgolette
2:number sono i numeri e si mettono senza le virgolette
3:boolean e sono due  valore true e false anche questi senza virgolette
4:null cioe assenza intenzionale del valore o di un oggeto e deve essere assolutamente intenzionale 
5:significa che una variabile ancora non ha un valore  
*/ 




/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 let myName ="marco"

 console.log(myName);
/* 



ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let numero = 12;
// let numero1 = 20;

// console.log(numero + numero1);
/*






ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12

console.log(x);










/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myName = "di candia"

console.log(myName);

const myUsername ="marcod"

console.log(myUsername);

//myUsername = "marcodicandia" //errore perche la costante non si puo sovrascrivere una volta dichiarata e unica una volta datta quella determinata nomenclatura e valore non si puo piu cambiare

//console.log(myUsername);















/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 console.log(x-4);








/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1="john"
let name2="John"

console.log(name1===name2);

console.log(name1!=name2);

console.log(name1.toLowerCase === name2.toLowerCase);