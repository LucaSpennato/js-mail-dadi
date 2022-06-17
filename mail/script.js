// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
//  stampa un messaggio appropriato sull’esito del controllo.
// Prima di partire a scrivere codice poniamoci qualche domanda: 
// Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?


const email = ['luca.spennato@gmail.com', 'ciao@booleancareers.com', 'giangianni@hotmail.com'];
const searchEmail = prompt ('inserisci la tua email');
let verify;

for (let index = 0; index < email.length; index++) {
    
    verify = email[index];
    // console.log(verify);
    
    if (searchEmail === verify){
        console.log('La tua email è presente!');
    } else{
        console.log('La tua email non è presente.')
    }
    
}


