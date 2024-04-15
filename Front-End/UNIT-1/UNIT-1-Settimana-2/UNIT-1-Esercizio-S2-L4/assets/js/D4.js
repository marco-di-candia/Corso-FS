/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    return l1 * l2;

}
console.log(area(3, 5));







/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */


function crazySum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    } else {
        return num1 + num2
    }
}
console.log(crazySum(2, 2));






/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */



function crazyDiff(diff) {
    if (diff >= 19) {
        return Math.abs(diff - 19) * 3;

    } else {
        return Math.abs(diff - 19);
    }

}
console.log(crazyDiff(20));







/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro,
  e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let numero5 = 10

function boundary(num) {
    if (num >= 20 && num <= 100 || num === 400) {
        return true;
    } else {
        return false;
    }
}

console.log(boundary(numero5));











/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita,
  ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function epify(stringa) {
    if (stringa.startsWith("EPICODE ")) {
        return stringa;
    } else {
        return "EPICODE " + stringa
    }
}
console.log(epify("bella"));








/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro.
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */


let numeropositivo = 25

function check3and7(numero) {
    if (numero % 3 === 0 && numero % 7 === 0) {
        return "e multiplo di 3 e 7";
    } else {
        return "non e multiplo di 3 e 7"
    }
}


function check3and7(numero) {
    if (numero % 3 === 0) {
        return "e multiplo di 3 e 7";
    } else if (numero % 7 === 0) {
        return "e multiplo di 3 e 7";
    } else {
        return "non e multiplo di 3 e 7";
    }
}
console.log(check3and7(numeropositivo));





/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro
(es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(stringa) {
    let stingspace = stringa.split("")
    let stirngalcontrario = stingspace.reverse()
    let notarray = stirngalcontrario.join()
    return notarray;
}
console.log(reverseString("EPICODE"));




/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirstPhrase = function (stringa) {
    let words = stringa.split(' ')
    let finalString = []
    for (let i = 0; i < words.length; i++) {
        let firstChar = words[i].charAt(0)
        let uppercaseChar = firstChar.toUpperCase()
        let cutString = words[i].slice(1)
        let finalWord = uppercaseChar + cutString
        finalString.push(finalWord)
    }
    console.log(finalString.join(' '))
}

upperFirstPhrase('hello world')


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa.
  La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(stringa) {
    return stringa.slice(1, 10)
}
console.log(cutString("hello world"));


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom",
  che accetta come parametro un numero n e ritorna un'array
   contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */



function giveMeRandom(n) {
    const arrayvuoto = []
    for (let i = 0; i < n; i++) {
        arrayvuoto.push(Math.floor(Math.random() * 10))

    }
    return arrayvuoto

}
console.log(giveMeRandom("11"));


