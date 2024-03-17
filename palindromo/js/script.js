/* --------------------------------------------------------------------------------------
   // Chiedo all'utente di inserire una parola
   // Creo una funzione che definisce se la parola è palindroma
   // - Ottengo la parola all contrario
   // - Se il contrario è uguale alla parola originale è palindroma
   // - Altrimenti no
-------------------------------------------------------------------------------------- */
/* VARIABLES */
const userWord = prompt('Inserisci una parola');
const userWordIsAPalindrome = isAPalindrome(userWord);
let userMessage;
/* APPLICATIONS */
if (userWordIsAPalindrome) {
    userMessage = 'La tua parola è palindroma';
} else {
    userMessage = 'La tua parola non è palindroma';
}
/* OUTPUT */
console.log('parole utente:', userWord);
alert(userMessage);
/* FUNCTIONS */
// Funzione che definisce se una parola è palindroma
// word: elemento stringa che rappresenta una parola
// return: un booleano in base se la parola è palindroma o no
function isAPalindrome(word) {
    let reverseWord = '';
    let isAPalindrome;
    for (let i = word.length - 1; i >= 0; i--) {
        const thisLetter = word[i];
        reverseWord += thisLetter;
    }
    if (reverseWord === word) {
        isAPalindrome = true;
    } else {
        isAPalindrome = false;
    }
    return isAPalindrome;
}