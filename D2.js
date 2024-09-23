/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n1 = 5;
let n2 = 4;
console.log(n1 < n2);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(n1 != 5 ? "not equal" : "equal");

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(n1 % 5 === 0 ? "divisibile per 5" : "non divisibile per 5");

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(n1 === 8 || n2 === 8 || n1 + n2 === 8 || n1 - n2 === 8);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 34;
console.log(totalShoppingCart > 50 ? totalShoppingCart : (totalShoppingCart += 10));

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart2;
let banana = 23;
let numBanane = 2;
let mela = 34;
let numMela = 1;
let totalPartial = (banana * numBanane * 20) / 100 + (mela * numMela * 20) / 100;
console.log(totalPartial);
console.log(
  (totalShoppingCart2 = totalPartial > 50 ? totalPartial : (totalPartial += 10))
);
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 234;
let num2 = 345;
let num3 = 243;
if (num1 > num2 && num2 > num3) {
  console.log(num1);
  console.log(num2);
  console.log(num3);
} else if (num1 > num3 && num3 > num2) {
  console.log(num1);
  console.log(num3);
  console.log(num2);
} else if (num2 > num1 && num1 > num3) {
  console.log(num2);
  console.log(num1);
  console.log(num3);
} else if (num2 > num3 && num3 > num1) {
  console.log(num2);
  console.log(num3);
  console.log(num1);
} else if (num3 > num1 && num1 > num2) {
  console.log(num3);
  console.log(num1);
  console.log(num2);
} else if (num3 > num2 && num2 > num1) {
  console.log(num3);
  console.log(num2);
  console.log(num1);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let nu = "23";
console.log(typeof nu === "number");

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

nu = 33;
console.log(nu % 2 === 0 ? "pari" : "dispari");

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

console.log((me.city = "Toronto"));
console.log(me);
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const newArray = [];
newArray[0] = 1;
newArray[1] = 2;
newArray[2] = 3;
newArray[3] = 4;
newArray[4] = 5;
newArray[5] = 6;
newArray[6] = 7;
newArray[7] = 8;
newArray[8] = 9;
newArray[9] = 10;

console.log(newArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

newArray[newArray.length - 1] = 100;
console.log(newArray);
