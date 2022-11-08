

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


        const prezzoKm = 0.21;
        
        // Variabili

        let sconto;
        
        sconto = 0;

        if (titoloeta < 18){
            sconto = 20;
        } else if (titoloeta >= 65){
            sconto = 40;
        }

        // Calcolare il prezzo totale del biglietto

        const prezzoTotale = prezzoKm * titolokm;

        // Calcolare il prezzo scontanto del biglietto

        const prezzoScontato = prezzoTotale * (100 - sconto) / 100;

        // Output

        document.getElementById("title").innerHTML= `Con l'acquisto di questo biglietto,
        potrà percorrere ${titolokm}Km ed essendo ${titoloeta}, avrà il diritto di uno
        sconto del ${sconto}%, il suo prezzo sarà di ${prezzoTotale}€ e il suo prezzo scontato totale sarà di ${prezzoScontato.toFixed(2)}€.`
    }
)



        


