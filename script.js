// Chiede all'utente di inserire una parola
let parola = prompt("Inserisci una parola");

// Funzione che controlla se la parola è palindroma
function palindroma(parola) {
    
    // Inverte la parola
    let parolaRiverso = parola.split("").reverse().join("");
    
    // Controlla se la parola invertita è uguale a quella originale
    if (parolaRiverso === parola) {
        return true; // La parola è palindroma
    } else {
        return false; // La parola non è palindroma
    }
}

// Verifica il risultato della funzione e stampa il messaggio
if (palindroma(parola)) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola non è palindroma");
}