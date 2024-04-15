let counter = document.getElementById("counter")
let count = parseInt(sessionStorage.getItem("counter")) || 0;

function updateCounter() {
    counter.innerText = count;
}

function increment() {
    count++;
    updateCounter();
    sessionStorage.setItem("counter", count);
}
setInterval(increment, 1000);
sessionStorage.setItem("counter", JSON.stringify(count))

updateCounter();
