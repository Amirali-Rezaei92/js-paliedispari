let PrevisioneDellUUtente = prompt("Inserisci 0 per pari, 1 per dispari :");
let numeroDellUtente = parseInt(prompt("Inserisci un numero da 1 a 5 :"));

if (PrevisioneDellUUtente !== "0" && PrevisioneDellUUtente !== "1") {
    console.log("Hai inserito un valore non valido per la previsione. Riprova.");
} else if (isNaN(numeroDellUtente) || numeroDellUtente < 1 || numeroDellUtente > 5) {
    console.log("Hai inserito un numero non valido. Riprova.");
} else {
    function numeroRandom() {
        return (Math.floor(Math.random() * 5) + 1);   
    }
    let numeroComputer = numeroRandom();
    let somma = numeroDellUtente + numeroComputer;
    function pariODispari(somma) {
        if (somma % 2 === 0) {
            return "0"; 
        } else {
            return "1"; 
        }
    }
    console.log("Numero utente:", numeroDellUtente);
    console.log("Numero computer:",numeroComputer);
    console.log("Somma:", somma);

    if (pariODispari(somma) === PrevisioneDellUUtente) {
        console.log("Hai vinto! La somma è " + somma);
    } else {
        console.log("Hai perso! La somma è " + somma);
    }
}   