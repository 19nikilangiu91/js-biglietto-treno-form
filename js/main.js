
const prezzoKm = 0.21;

// Variabili

let utenteKm, utenteEta, sconto;

sconto = 0;

if (utenteEta < 18){
    sconto = 20;
} else if (utenteEta >= 65){
    sconto = 40;
}

// console.log(sconto)

// Calcolare il prezzo totale del biglietto

// const prezzoTotale = prezzoKm * utenteKm;

// console.log(prezzoTotale)

// Calcolare il prezzo scontanto del biglietto

// const prezzoScontato = prezzoTotale * (100 - sconto) / 100;

// console.log(prezzoScontato)

// Output

const nome = document.getElementById("input");
const inputField = document.getElementById("name");
const myButton = document.querySelector("button");

myButton.addEventListener("click",

    function(){
        const titolo = inputField.value;
        output.innerHTML = titolo;
        inputField.value = null;
    }
)
    

