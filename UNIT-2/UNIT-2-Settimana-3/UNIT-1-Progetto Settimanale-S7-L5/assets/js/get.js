let qui = document.getElementById("qui")

// al caricamento fammi vedere le card 

window.addEventListener('load', init);

function init() {
    postData()
}
// async get
async function postData() {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGIwOTJkN2IxMTAwMTkwZTZkZjQiLCJpYXQiOjE3MDk4OTAzMTMsImV4cCI6MTcxMTA5OTkxM30.GsVDULKRzpOnTkjow_65d6jw_WhwouauHIqvTdNTExA'
            },
        });

        const responseData = await response.json();
        console.log(responseData);
        stampa(responseData)


    } catch (error) {
        console.error("Si è verificato un errore:", error);
    }
}
// stamap card 
const stampa = (responseData) => {
    if (responseData.length === 0) {
        const mess = document.createElement('h1');
        mess.classList.add("d-flex", "justify-content-center")
        mess.innerHTML = `<h1>Non ci sono contenuti da mostrare</h1>`;
        qui.appendChild(mess);
    } else {
        responseData.forEach(data => {
            const creaDiv = document.createElement('div');
            creaDiv.classList.add("col-12", "col-md-3");
            creaDiv.innerHTML =
                `<div class="card mt-2 h-100 " >
                     <img src="${data.imageUrl}" class="card-img-top  card-img-top img-fluid" alt="...">
                     <div class="card-body">
                         <h5 class="card-title">${data.brand}</h5>
                         <p class="card-text">${data.description}</p>
                         <a href="delete.html?id=${data._id}"><button type="button" class="btn btn-secondary px-2">Modifica</button></a>
                         <a href="detail.html?id=${data._id}"><button type="button" class="btn btn-warning px-3" >Scopri di più</button required></a> 
                     </div>
                 </div>`
            qui.appendChild(creaDiv);
        });
    }
}
const updateButton = document.getElementById("updateButton");

updateButton.addEventListener("click", async () => {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        const updatedData = {
            name: document.getElementById('inputName').value,
            brand: document.getElementById('inputBrand').value,
            price: document.getElementById('inputPrice').value,
            imageUrl: document.getElementById('inputUrl').value,
            description: document.getElementById('inputText').value
        };

        await updateProduct(productId, updatedData);
    } catch (error) {
        console.error("Si è verificato un errore durante la modifica del prodotto:", error);
    }
});