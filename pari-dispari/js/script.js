/* --------------------------------------------------------------------------------------
   // Chiedo all'utente di sceglire tra pari e dispari
   // Chiedo di inserire un numero da 1 a 5
   // Genero un numero casuale sempre da 1 a 5
   // Sommo i numeri
   // Creo una funzione per stabilire se la somma è pari o dispari
   // Creo un alert che stabilisce chi ha vinto
-------------------------------------------------------------------------------------- */
/* VARIABLES */
const userEvenOrOdd = prompt('Scegli tra pari o dispari');
const userNumber = parseInt(prompt('Dammi un numero tra 1 e 5'));
const pcNumber = getRndInteger(1, 5);
/* OUTPUT */
console.log('scelta utente:', userEvenOrOdd);
console.log('numero utente:', userNumber);
console.log('numero pc:', pcNumber);
/* FUNTIONS */
// Funzione per generare un numero random
// Presa da w3schools
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}