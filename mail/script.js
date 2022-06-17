// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
//  stampa un messaggio appropriato sull’esito del controllo.
// Prima di partire a scrivere codice poniamoci qualche domanda: 
// Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?


const emailList = ['luca.spennato@gmail.com', 'ciao@booleancareers.com', 'giangianni@hotmail.com'];
const searchEmail = prompt ('inserisci la tua email');

// se voglio trovare nel log esterno dopo il for, il numero di appartenenza dell'elemento dell'array
// es.: giangianni etc.., imposto verify a -1, nell'if con verify=index, 
// nel prompt inserisco l'esatto elemento il quale io sto cercando 
// ed in ritorno avrà il suo numero di appartenenza, il suo numero di posizione, es giangianni n-2!
let verify = 'La tua mail non è presente';

for (let index = 0; index < emailList.length; index++) {
    
    let singleEmail = emailList[index];
    
    if (searchEmail === singleEmail){
        verify = 'La tua mail è presente';
    } 
    
}

alert(verify);