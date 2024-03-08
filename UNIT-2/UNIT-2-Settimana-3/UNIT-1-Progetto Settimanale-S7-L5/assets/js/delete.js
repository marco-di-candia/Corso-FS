// caturo id e riporto i valori della card negli input

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGIwOTJkN2IxMTAwMTkwZTZkZjQiLCJpYXQiOjE3MDk4OTAzMTMsImV4cCI6MTcxMTA5OTkxM30.GsVDULKRzpOnTkjow_65d6jw_WhwouauHIqvTdNTExA'
            }
        });

        if (!response.ok) {
            throw new Error('Errore nella richiesta API');
        }

        const product = await response.json();

        document.getElementById('inputName').value = product.name;
        document.getElementById('inputBrand').value = product.brand;
        document.getElementById('inputPrice').value = product.price;
        document.getElementById('inputUrl').value = product.imageUrl;
        document.getElementById('inputText').value = product.description;

    } catch (error) {
        console.error("Si è verificato un errore:", error);
    }
});


// modifica la card



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

async function updateProduct(productId, updatedData) {
    try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGIwOTJkN2IxMTAwMTkwZTZkZjQiLCJpYXQiOjE3MDk4OTAzMTMsImV4cCI6MTcxMTA5OTkxM30.GsVDULKRzpOnTkjow_65d6jw_WhwouauHIqvTdNTExA'
            },
            body: JSON.stringify(updatedData)
        });

        if (response.ok) {
            alert("Prodotto modificato con successo");

        } else {
            console.error("Errore durante la modifica del prodotto");
        }
    } catch (error) {
        console.error("Si è verificato un errore:", error);
    }
}

// elimina la card


const deleteButton = document.getElementById("deleteButton");

deleteButton.addEventListener("click", async () => {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        await deleteProduct(productId);
    } catch (error) {
        console.error("Si è verificato un errore durante l'eliminazione del prodotto:", error);
    }
});

async function deleteProduct(productId) {
    try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGIwOTJkN2IxMTAwMTkwZTZkZjQiLCJpYXQiOjE3MDk4OTAzMTMsImV4cCI6MTcxMTA5OTkxM30.GsVDULKRzpOnTkjow_65d6jw_WhwouauHIqvTdNTExA'
            },
        });

        if (response.ok) {
            console.log("Eliminato con succeso");


        } else {
            console.error("Errore durante l'eliminazione del prodotto");
        }
    } catch (error) {
        console.error("Si è verificato un errore:", error);
    }
}


