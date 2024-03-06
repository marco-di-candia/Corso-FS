const array = []; // Dichiarazione globale dell'array
const list = document.getElementById("list");
const shopCard = document.getElementById("shopCard");
const shop = []

fetch("https://striveschool-api.herokuapp.com/books")
    .then(response => {
        if (!response.ok) {
            throw new Error("Errore nella richiesta API");
        }
        return response.json();
    })
    .then(data => {
        // Popolare l'array globale con i dati ottenuti dalla richiesta API
        array.push(...data);
        // Chiamare la funzione stampa solo dopo che i dati sono stati recuperati
        stampa();
    })
    .catch(error => {
        console.error("Si è verificato un errore:", error);
    });

const stampa = () => {
    // Per ogni libro nell'array
    array.forEach(elementLibro => {
        const card = document.createElement("div");
        card.classList.add("col-12", "col-md-3");
        card.setAttribute("id", `card-${elementLibro.asin}`); // Aggiungi l'ID specifico alla card
        card.innerHTML = `
                    <div class="card">
                        <img src="${elementLibro.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${elementLibro.category}</h5>
                            <h5 class="card-title">${elementLibro.title}</h5>
                            <p class="card-text">${elementLibro.price}</p>
                            <a href="#" class="btn btn-primary"onclick=" addcard('${elementLibro.asin}')">Dettagli</a>
                            <button type="button" class="btn btn-danger" onclick="deleteItem('${elementLibro.asin}')">Elimina</button>
                        </div>
                    </div>
                `;
        list.appendChild(card);
        localStorage.setItem('myData', JSON.stringify(array));
    });
}
function addcard(asin) {
    const card = array.find(card => card.asin === asin);
    shop.push(card);
    addItemCard();
}

function addItemCard() {
    shopCard.innerHTML = '';
    shop.forEach(asin => {
        shopCard.innerHTML += ` 
    <div>
            <div class="d-flex align-items-start gap-2 pt-2">
                <img src="${asin.img}" class="img-fluid" width="60" />
                <p class="fw-bold">
                    ${asin.price} €
                </p>
                       
                            <div>
                            <button type="button" class="btn btn-danger" onclick="deleteItemShop('${asin.asin}')">Elimina</button>
                            </div>
                        
                 </div>
            </div>
    </div>`
    })
}
function deleteItem(asin) {
    const del = document.getElementById(`card-${asin}`);
    if (del) {
        del.remove();
    }
    let i = array.findIndex(card => card.asin === asin);
    array.splice(i, 1);
    localStorage.setItem('card', JSON.stringify(shop));
}

function deleteItemShop(asinShop) {
    let iShop = shop.findIndex(cardShop => cardShop.asin === asinShop);
    shop.splice(iShop, 1);
    localStorage.setItem('card', JSON.stringify(shop));
    addItemCard(); // Aggiorna la visualizzazione degli elementi nel carrello
}
