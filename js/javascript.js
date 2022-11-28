let nome_e_cognome;
let km;
let eta;

let button_invia = document.getElementById("invia")
button_invia.addEventListener("click", function(){
    nome_e_cognome = document.getElementById("nome-e-cognome").value
    console.log(nome_e_cognome)
    km = document.getElementById("numero-kilometri").value
    console.log(numero-kilometri)
    eta = document.getElementsById("eta").value
    console.log(eta)
})