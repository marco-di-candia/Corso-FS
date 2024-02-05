/* ESERCIZIO 1
      Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
   */

//    const changeTitle = function () {
//    let primoId = document.querySelector('div h1');
//    primoId.innerHTML = '<h1> ho cambiato il titolo </h1>'

//    }
//    changeTitle()

/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {
    let h2ConColore = document.querySelector("div h2");
    h2ConColore.className = "myHeading"
}
addClassToTitle()

/* ESERCIZIO 3
 Scrivi una funzione che cambi il testo dei p figli di un div
*/

const changePcontent = function () {
    let changetesto = document.querySelectorAll("div p ");
    for (let i = 0; i < changetesto.length; i++) {
        changetesto[i].innerText = " testo cambiato testo cambiato"

    }

}

changePcontent()

/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function () {
    let change = document.querySelector("a");
    change.innerHTML = "https://www.google.com";
    change.innerText = "Google";


}
changeUrls()

/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () {
    let secondList = document.getElementById("secondList")
    let numali = document.createElement("li")
    numali.innerHTML = " nuovo li "
    secondList.appendChild(numali)
}
addToTheSecond()

/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un paragrafo al primo div
*/

const addParagraph = function () {
    let qui = document.querySelectorAll("div")[0]
    let add = document.createElement("p")
    add.innerHTML = " nuovo paragrafo"
    qui.appendChild(add)

}
addParagraph()

/* ESERCIZIO 7
 Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {
    let remove = document.getElementById("firstList")
    remove.style.display = "none"

}
hideFirstUl()

/* ESERCIZIO 8 
 Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {
    let bgGreen = document.querySelectorAll("li")
    for (let i = 0; i < bgGreen.length; i++) {
        bgGreen[i].setAttribute("style", "background: green ")

    }


}
paintItGreen()

/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/
const makeItClickable = function () {
    let h1 = document.querySelector("h1")
    button1.addEventListener("click", function () {
        let scritta = h1.innerText.split("");
        scritta.pop();
        let nuovascritta = scritta.join("");
        h1.innerText = nuovascritta;
    });


};
console.log(makeItClickable());

/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/
const revealFooterLink = function () {
    const footer = document.getElementById('evento');
    footer.addEventListener('click', function () {
        const footerLink = document.getElementById('evento');
        alert(footerLink);
    });
};
revealFooterLink()




/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
// */
const generateTable = function () {
    // selezione e creazione tabella 


    const padretable = document.getElementById("tableArea")
    const table = document.createElement("table")


    // creazione interna tabella cioe tr th 
    // creazione interna tabella cioe tr th 
    const intestazione = document.createElement("tr")
    const thId = document.createElement("th")
    thId.innerText = "ID"
    // creazione interna tabella cioe tr th 
    const thImg = document.createElement("th")
    thImg.innerHTML = "immagine"
    // creazione interna tabella cioe tr th 
    const thNome = document.createElement("th")
    thNome.innerText = "tablet"
    // creazione interna tabella cioe tr th 
    const thQuantita = document.createElement("th")
    thQuantita.innerText = "quantita"


    // popolamento riga di intastazione


    intestazione.appendChild(thId)
    intestazione.appendChild(thImg)
    intestazione.appendChild(thNome)
    intestazione.appendChild(thQuantita)

    table.appendChild(intestazione)
    padretable.appendChild(table);
}

generateTable()










































/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

//    const addRow = function () {
//     let tableArea = document.getElementById("tableArea")
//     tableArea.innerHTML = "<table>   <tr>  <th> prima riga </th> <th> prima riga </th>  <th> prima riga </th> </tr>  </table> "


//    }
//    addRow()

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () { }

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () { }