const prezzoKm = 0.21;

// Variabili

let utenteKm, utenteEta, sconto;

sconto = 0;

const nome = document.getElementById("outputone");
const km = document.getElementById("outputtwo");
const etaClient = document.getElementById("outputthree");
const nameField = document.getElementById("name");
const kmField = document.getElementById("km");
const etaField = document.getElementById("eta");
const myButton = document.querySelector("button");

myButton.addEventListener("click",

    function(){
        const titolo = nameField.value;
        const titolokm = kmField.value;
        const titoloeta = etaField.value;
        nome.innerHTML = titolo;
        km.innerHTML = titolokm;
        etaClient.innerHTML = titoloeta;
        nameField.value = null;
        kmField.value = null;
        etaField.value = null;
    }
)

    

