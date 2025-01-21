// **Descrizione:**
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// **NOTA**: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
// **BONUS:**
// - Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// - Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
// Consigli del giorno:
// >
// > - Pensate prima in italiano.
// > - Dividete in piccoli problemi la consegna.
// > - Individuate gli elementi di cui avete bisogno per realizzare il programma.
// > - Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"

// const numero1 = document.getElementById('number1');
// const numero2 = document.getElementById('number2');
// const numero3 = document.getElementById('number3');
// const numero4 = document.getElementById('number4');
// const numero5 = document.getElementById('number5');

// const num1 = Math.floor(Math.random()* 50) + 1;
// const num2 = Math.floor(Math.random()* 50) + 1;
// const num3 = Math.floor(Math.random()* 50) + 1;
// const num4 = Math.floor(Math.random()* 50) + 1;
// const num5 = Math.floor(Math.random()* 50) + 1;

// console.log(num1, num2, num3, num4, num5)

// const clock = setInterval(random, 30000);

// function random(){

//     let counter = 30
//     console.log(counter--)

//     number1.innerHTML = num1
//     number2.innerHTML = num2
//     number3.innerHTML = num3
//     number4.innerHTML = num4
//     number5.innerHTML = num5
// }

// random()

//Creo un Array per i 5 numeri randomici

let numeriRandom = []

function numRandom (arrayNum){
    for (i = 0; i < 5; i++){
        let random = Math.floor(Math.random()* 50) + 1;
        arrayNum.push(random);
    }
    return arrayNum
}

console.log(numRandom(numeriRandom));

//Creo una funzione per inserire i 5 numeri nell'HTML

function displayNumbers(numbers){

    const numberList = document.getElementById('numbers-list');

    for (let i = 0; i < numbers.length; i++){
        const liTag = document.createElement('li');
        liTag.innerHTML = numbers[i];
        numberList.appendChild(liTag);
    }
}

displayNumbers(numeriRandom)

// Creo un intervallo per nascondere i 5 numeri e inserire il form con quelli che l'utente dovrà aggiungere
const contatore = document.getElementById("countdown")
let counter = 30;
let timer;

setInterval(function dNoneFunction(){
    


    if( counter === -1 ){

        clearInterval( dNoneFunction )

        const list = document.getElementById("numbers-list").classList
        list.add("d-none");

        const form = document.getElementById("answers-form").classList
        form.remove("d-none");

        const instructions = document.getElementById("instructions").classList
        instructions.add("d-none");

        const count = document.getElementById("countdown").classList
        count.add("d-none");

    } else {
        contatore.innerHTML = counter--
    }
    return counter

}, 1000)


const valore = document.querySelectorAll (".form-control");
const button = document.querySelector("button");
const datiUtente = [];

button.addEventListener("click", function (event) {
    event.preventDefault();
    for (let i = 0; i < valore.length; i++) {
        datiUtente.push(parseInt(valore[i].value));
        console.log(datiUtente);
      }
})








// function getUtente(newNumbers){

//     for (let i = 0; i < 5; i++) {
//     const utente = document.getElementById("answers-form");
//     newNumbers.push(utente);
//    }
//     return newNumbers
// }





  





