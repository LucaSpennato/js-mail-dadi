const user = parseInt((Math.floor(Math.random() * 10) + 1));
const computer = parseInt((Math.floor(Math.random() * 10) + 1));

console.log(user, computer);

if(user < computer){
    console.log(`Il tuo numero: ${user} è più basso rispetto al numero del computer ${computer}, quindi hai perso! `);
} else if (user === computer){
    console.log(`Avete fatto entrambi ${user}, pareggio!`);
} else{
    console.log(`Il tuo numero ${user}, è più alto del computer: ${computer}, hai vinto!`);
}