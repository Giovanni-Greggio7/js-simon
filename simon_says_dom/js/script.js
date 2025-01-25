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

//Creo un Array per i 5 numeri randomici

let numeriRandom = [] //array vuoto dove pushare i numeri random

function numRandom(arrayNum) { //funzione per generare i numeri con un ciclo da 5 giri e un posto fittizio (tra le parentesi)
    for (i = 0; i < 5; i++) {
        let random = Math.floor(Math.random() * 50) + 1; //i numeri saranno da 1 a 50
        arrayNum.push(random); // i numeri randomici vengono inseriti nell'array vuoto
    }
    return arrayNum // restituiamo il risultato della funzione e la chiudiamo
}

console.log(numRandom(numeriRandom)); //mettiamo nel campo fittizio dove la funzione deve svolgere il suo compito (ovvero l'array vuoto)

//Creo una funzione per inserire i 5 numeri nell'HTML

function displayNumbers(numbers) { //funzione per stampare i numeri nel file html

    const numberList = document.getElementById('numbers-list'); //creiamo variabile per collegare funzione con l'id nell'html dove andranno stampati i numeri

    for (let i = 0; i < numbers.length; i++) {
        const liTag = document.createElement('li'); //nuova variabile: crea i tag "li"(list item) 
        liTag.innerHTML = numbers[i]; //stampa ciò che viene inserito nella posizione fittizia (numeriRandom) con la variabile "liTag"
        numberList.appendChild(liTag); //il metodo "appendChild" inserisce gli elementi di "liTag" nell'html collegato con l'id
    }
}

displayNumbers(numeriRandom) //mettiamo nel campo fittizio dove la funzione deve svolgere il suo compito (ovvero l'array in cui sono stati inseriti i numeri random)

// Creo un intervallo per nascondere i 5 numeri e inserire il form con quelli che l'utente dovrà aggiungere
const contatore = document.getElementById("countdown") //creiamo variabile per collegare funzione con l'id nell'html dove verrà visualizzato il timer
let counter = 30; //impostato a 30 secondi
let timer; //?

setInterval(function dNoneFunction() { //usiamo funzione timing "setInterval" per impostare timer per la funzione "dNoneFunction"



    if (counter === -1) { //condizione: se il contatore arriva a 0 (é -1 perché se fosse 0 si fermerebbe a 1 nell'html) -->

        clearInterval(dNoneFunction) //"clearInterval" termina la funzione di timing

        const list = document.getElementById("numbers-list").classList  //creiamo variabili per aggiungere queste classi a questi tag html connessi con id, usando il metodo ".classList"
        list.add("d-none"); //e poi "list.add" aggiunge il nome della classe (d-none significa display = none ed é presa da Boostrap)

        const form = document.getElementById("answers-form").classList //idem come sopra
        form.remove("d-none");

        const instructions = document.getElementById("instructions").classList //idem come sopra
        instructions.add("d-none");

        const count = document.getElementById("countdown").classList //idem come sopra
        count.add("d-none");

    } else { //altrimenti: stampa il contatore in html (sempre connesso con id) scendendo ogni volta di uno con il decremento
        contatore.innerHTML = counter--
    }
    return counter // restituiamo il risultato della funzione e la chiudiamo

}, 1000) //1000 imposta ogni quanto il contatore scende, e corrisponde a un secondo


const valore = document.querySelectorAll(".form-control"); //creiamo variabili per connettere il form nell'html
const button = document.querySelector("button"); //creiamo variabili per connettere il bottone nell'html
const messaggio = document.getElementById("messaggio") //creiamo variabili per connettere il messaggio da mostrare all'utente nell'html
const datiUtente = []; //array vuoto per i numeri inseriti dall'utente

button.addEventListener("click", function (event) { //creiamo evento click per la variabile "button" con una funzione anonima e posizione fittizia
    event.preventDefault(); //metodo per impedire al form di resettarsi al click

    for (let i = 0; i < valore.length; i++) { //ciclo per raccogliere i 5 numeri inseriti dall'utente
        if (numeriRandom.includes(parseInt(valore[i].value))){ //condizione per controllare se l'array "numeriRandom" include i numeri inseriti dall'utente
            datiUtente.push(valore[i].value) //se si, inserisci i valori nell'array vuoto
        }

        console.log(datiUtente, valore[i].value, numeriRandom.includes(parseInt(valore[i].value))) //stampa in console i giri del ciclo, controllando ogni numero dell'utente con l'array numeriRandom
    }

    messaggio.innerHTML = `Complimenti ha indovinato: ${datiUtente.length}, e sono: ${datiUtente.join("-")}`//con la condizione soddisfatta, stampa nell'id in html "messaggio" questo testo con il template literal (i backtick = ``)
})
