//variabile della stampa

let save = document.getElementById("save");

// chiamo la url
//  creo una card 

async function postData(dataToSend) {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGIwOTJkN2IxMTAwMTkwZTZkZjQiLCJpYXQiOjE3MDk4OTAzMTMsImV4cCI6MTcxMTA5OTkxM30.GsVDULKRzpOnTkjow_65d6jw_WhwouauHIqvTdNTExA'
            },
            body: JSON.stringify(dataToSend)
        });

        const responseData = await response.json();
        return responseData;

    } catch (error) {
        console.error("Si è verificato un errore:", error);
        return [];
    }

}
// event listner per creare la card nell json prendendo i valori negli input
save.addEventListener("click", async (e) => {
    e.preventDefault();

    let inputName = document.getElementById("inputName").value;
    let inputBrand = document.getElementById("inputBrand").value;
    let inputPrice = document.getElementById("inputPrice").value;
    let inputUrl = document.getElementById("inputUrl").value;
    let inputText = document.getElementById("inputText").value;

    // se tutti questi sono true fai funzionare il button 
    if (inputName && inputBrand && inputPrice && inputUrl && inputText) {

        const dataToSend = {
            imageUrl: inputUrl,
            name: inputName,
            description: inputText,
            brand: inputBrand,
            price: inputPrice
        };

        try {
            const responseData = await postData(dataToSend);
            console.log(responseData)

        } catch (error) {
            console.error("Si è verificato un errore durante l'invio dei dati:", error);
        }
    } else {
        alert("Si prega di compilare tutti i campi.");
    }
});


