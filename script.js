let parola = prompt("Inserisci una parola");

function palindroma(parola) {
    let parolaRiverso = parola.split("").reverse().join("");
    if (parolaRiverso === parola) {
        return true;
    } else { return false; }
}
if(palindroma(parola)){
    console.log('parola è palindra');
} else{
    console.log('Palora Non è Palindra');

}
