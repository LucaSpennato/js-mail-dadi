// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
//  stampa un messaggio appropriato sull’esito del controllo.
// Prima di partire a scrivere codice poniamoci qualche domanda: 
// Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?


const emailList = ['luca.spennato@gmail.com', 'ciao@booleancareers.com', 'giangianni@hotmail.com'];
const searchEmail = prompt ('inserisci la tua email');
let verify = false;

for (let index = 0; index < emailList.length; index++) {
    
    let singleEmail = emailList[index];
    
    if (searchEmail === singleEmail){
        verify = true;
    }
    
}

console.log(verify);