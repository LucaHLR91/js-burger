// Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.

//RICHIEDO IL NOME DEL PANINO
var customerBurgerName = prompt('Dai un nome al tuo panino');
document.getElementById('customer-name').innerHTML = customerBurgerName;

//PREZZO BASE HAMBURGER
let hamburgerPrice = 5;
document.getElementById('final-price').innerHTML = "€" + " " + hamburgerPrice;

//ARRAY CODICI SCONTO
let discountCode = ['12345ABCDE', 'ABCDE12345', '1A2B3C4D5E'];

//FUNZIONI
