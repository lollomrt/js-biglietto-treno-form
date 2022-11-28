let nome_e_cognome;
let km;
let eta;
let offerta;

let button_invia = document.getElementById("invia")
button_invia.addEventListener("click", function(){
    nome_e_cognome = document.getElementById("nome-e-cognome").value
    console.log(nome_e_cognome)
    km = document.getElementById("numero-kilometri").value
    console.log(km)
    eta = document.getElementById("eta").value
    console.log(eta)

    let prezzo = km * 0.21
    let sconto_over = prezzo * 40 / 100
    let sconto_minorenni = prezzo * 20 / 100
    let prezzo_finale;
    let biglietto_standard = "biglietto standard"
    let biglietto_ridotto = "biglietto ridotto"
    

    //controllo prezzo
    if (eta === "minorenne") {
        prezzo_finale = prezzo - sconto_minorenni
        console.log(prezzo_finale)
        offerta = biglietto_ridotto
    }

    else if (eta === "over-65") {
        prezzo_finale = prezzo - sconto_over
        console.log(prezzo_finale)
        offerta = biglietto_ridotto
    }

    else {
        prezzo_finale = prezzo
        console.log(prezzo_finale)
        offerta = biglietto_standard
    }

    document.getElementById("costo-biglietto").innerHTML = prezzo_finale.toFixed(2) + "€"
    document.getElementById("nome-passeggero").innerHTML = nome_e_cognome
    document.getElementById("offerta").innerHTML = offerta

})