// Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.

//RICHIEDO IL NOME DEL CLIENTE
var customerBurgerName = prompt('Dai un nome al tuo panino');
document.getElementById('customer-name').innerHTML = customerBurgerName;

//PREZZO BASE HAMBURGER
let hamburgerPrice = 5;
document.getElementById('final-price').innerHTML = "€" + " " + hamburgerPrice;
//FUNZIONI
