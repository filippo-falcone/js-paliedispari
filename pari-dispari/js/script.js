/* --------------------------------------------------------------------------------------
   // Chiedo all'utente di sceglire tra pari e dispari
   // Chiedo di inserire un numero da 1 a 5
   // Genero un numero casuale sempre da 1 a 5
   // Sommo i numeri
   // Creo una funzione per stabilire se la somma è pari o dispari
   // Creo un alert che stabilisce chi ha vinto
-------------------------------------------------------------------------------------- */
/* VARIABLES */
const userEvenOdd = prompt('Scegli tra pari o dispari');
const userNumber = parseInt(prompt('Dammi un numero tra 1 e 5'));
const pcNumber = getRndInteger(1, 5);
const sum = userNumber + pcNumber;
const sumEvenOdd = isEvenOdd(sum);
let userMessage;
/* APPLICATIONS */
if (userEvenOdd === sumEvenOdd) {
    userMessage = 'Hai vinto!';
} else {
    userMessage = 'Hai perso!';
}
/* OUTPUT */
alert(userMessage);
console.log('scelta utente:', userEvenOdd);
console.log('numero utente:', userNumber);
console.log('numero pc:', pcNumber);
console.log('somma:', sum);
/* FUNCTIONS */
// Funzione per generare un numero random
// Presa da w3schools
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Funzione per definire se la somma è pari o dispari
// number: elemento di tipo numerico
// return: evenOrOdd variabile con il risultato della verifica
function isEvenOdd(number) {
    let evenOdd;
    if (sum % 2 === 0) {
        evenOdd = 'pari';
    } else {
        evenOdd = 'dispari';
    }
    return evenOdd;
}