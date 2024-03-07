// JavaScript
let endpoint = "https://api.pexels.com/v1/search?query=";
let cardImages = document.querySelectorAll(".card-img-top");

async function fetchData() {
    try {
        const response = await fetch(endpoint + "mountain", {
            headers: {
                "Authorization": " TfgFra5ESXwn1pkLQAx4NgZQcpI21t8HCaexwlXDM2dU84nDAo5CKPTg"
            }
        });
        const data = await response.json();
        return data.photos;
    } catch (error) {
        console.error("Si è verificato un errore:", error);
        return [];
    }
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

async function updateCardImages() {
    const photos = await fetchData();
    if (photos.length === 0) return;

    let remainingPhotos = photos.slice(); // Copia l'array photos per non modificarlo direttamente
    cardImages.forEach(cardImage => {
        if (remainingPhotos.length === 0) return; // Se non ci sono più foto rimaste, esci dal loop
        const randomIndex = getRandomIndex(remainingPhotos.length);
        const randomPhoto = remainingPhotos[randomIndex];
        if (randomPhoto.src && randomPhoto.src.medium) {
            cardImage.src = randomPhoto.src.medium;
        }
        remainingPhotos.splice(randomIndex, 1); // Rimuovi la foto appena visualizzata dall'array
    });
}

document.getElementById("firstLoad").addEventListener("click", (e) => {
    e.preventDefault();
    updateCardImages();
});



// secondo tasto 
let secondLoad = document.getElementById("secondLoad")
async function fetchData1() {
    try {
        const response = await fetch(endpoint + "people", {
            headers: {
                "Authorization": " TfgFra5ESXwn1pkLQAx4NgZQcpI21t8HCaexwlXDM2dU84nDAo5CKPTg"
            }
        });
        const data = await response.json();
        return data.photos;
    } catch (error) {
        console.error("Si è verificato un errore:", error);
        return [];
    }
}

function getRandomIndex1(max) {
    return Math.floor(Math.random() * max);
}

async function updateCardImages1() {
    const photos = await fetchData1();
    if (photos.length === 0) return;

    let remainingPhotos = photos.slice(); // Copia l'array photos per non modificarlo direttamente
    cardImages.forEach(cardImage => {
        if (remainingPhotos.length === 0) return; // Se non ci sono più foto rimaste, esci dal loop
        const randomIndex = getRandomIndex1(remainingPhotos.length);
        const randomPhoto = remainingPhotos[randomIndex];
        if (randomPhoto.src && randomPhoto.src.medium) {
            cardImage.src = randomPhoto.src.medium;
        }
        remainingPhotos.splice(randomIndex, 1); // Rimuovi la foto appena visualizzata dall'array
    });
}

document.getElementById("secondLoad").addEventListener("click", (e) => {
    e.preventDefault();
    updateCardImages1();
});


// search bar
let input = document.getElementById("input")
async function fetchData2() {
    try {
        const response = await fetch(endpoint + `${input.value}`, {
            headers: {
                "Authorization": " TfgFra5ESXwn1pkLQAx4NgZQcpI21t8HCaexwlXDM2dU84nDAo5CKPTg"
            }
        });
        const data = await response.json();
        return data.photos;
    } catch (error) {
        console.error("Si è verificato un errore:", error);
        return [];
    }
}

function getRandomIndex1(max) {
    return Math.floor(Math.random() * max);
}

async function updateCardImages2() {
    const photos = await fetchData2();
    if (photos.length === 0) return;

    let remainingPhotos = photos.slice(); // Copia l'array photos per non modificarlo direttamente
    cardImages.forEach(cardImage => {
        if (remainingPhotos.length === 0) return; // Se non ci sono più foto rimaste, esci dal loop
        const randomIndex = getRandomIndex1(remainingPhotos.length);
        const randomPhoto = remainingPhotos[randomIndex];
        if (randomPhoto.src && randomPhoto.src.medium) {
            cardImage.src = randomPhoto.src.medium;
        }
        remainingPhotos.splice(randomIndex, 1); // Rimuovi la foto appena visualizzata dall'array
    });
}

document.getElementById("trova").addEventListener("click", (e) => {
    e.preventDefault();
    updateCardImages2();
});


