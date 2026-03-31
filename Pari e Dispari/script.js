// Chiede all'utente di scegliere 0 per pari oppure 1 per dispari
let PrevisioneDellUUtente = prompt("Inserisci 0 per pari, 1 per dispari :");

// Chiede all'utente di inserire un numero da 1 a 5
let numeroDellUtente = parseInt(prompt("Inserisci un numero da 1 a 5 :"));

// Controlla se la previsione inserita è valida
if (PrevisioneDellUUtente !== "0" && PrevisioneDellUUtente !== "1") {
    
    // Messaggio di errore se la previsione non è corretta
    console.log("Hai inserito un valore non valido per la previsione. Riprova.");

// Controlla se il numero inserito non è valido
} else if (isNaN(numeroDellUtente) || numeroDellUtente < 1 || numeroDellUtente > 5) {
    
    // Messaggio di errore se il numero è fuori dal range 1-5
    console.log("Hai inserito un numero non valido. Riprova.");

} else {

    // Funzione che genera un numero casuale da 1 a 5
    function numeroRandom() {
        return (Math.floor(Math.random() * 5) + 1);   
    }

    // Salva il numero casuale del computer
    let numeroComputer = numeroRandom();

    // Calcola la somma tra numero utente e numero computer
    let somma = numeroDellUtente + numeroComputer;

    // Funzione che controlla se la somma è pari o dispari
    function pariODispari(somma) {
        
        // Se il resto della divisione per 2 è 0 → numero pari
        if (somma % 2 === 0) {
            return "0"; 
        
        // Altrimenti è dispari
        } else {
            return "1"; 
        }
    }

    // Stampa il numero scelto dall'utente
    console.log("Numero utente:", numeroDellUtente);

    // Stampa il numero generato dal computer
    console.log("Numero computer:", numeroComputer);

    // Stampa la somma totale
    console.log("Somma:", somma);

    // Controlla se la previsione dell'utente è corretta
    if (pariODispari(somma) === PrevisioneDellUUtente) {
        
        // Messaggio di vittoria
        console.log("Hai vinto! La somma è " + somma);
    
    } else {
        
        // Messaggio di sconfitta
        console.log("Hai perso! La somma è " + somma);
    }
}