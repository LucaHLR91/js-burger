// Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.

//RICHIEDO IL NOME DEL CLIENTE
var customerName = prompt('Inserisci il tuo nome');
document.getElementById('customer-name').innerHTML = "Welcome" + " " + customerName;

//PREZZO BASE HAMBURGER
let hamburgerPrice = 5;
document.getElementById('final-price').innerHTML = "€" + " " + hamburgerPrice;
//FUNZIONI
