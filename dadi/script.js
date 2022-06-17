

let buttonPlay = document.getElementById('play');
let result = document.getElementById('result');

buttonPlay.addEventListener('click', function () {

    const user = parseInt((Math.floor(Math.random() * 6) + 1));
    const computer = parseInt((Math.floor(Math.random() * 6) + 1));

    if (user < computer) {
        result.innerHTML = `Il tuo numero: ${user} è più basso rispetto al numero del computer ${computer}, quindi hai perso!`
        console.log(`Il tuo numero: ${user} è più basso rispetto al numero del computer ${computer}, quindi hai perso! `);
    } else if (user === computer) {
        result.innerHTML = `Avete fatto entrambi ${user}, pareggio!`
        console.log(`Avete fatto entrambi ${user}, pareggio!`);
    } else {
        result.innerHTML = `Il tuo numero ${user}, è più alto del computer: ${computer}, hai vinto!`
        console.log(`Il tuo numero ${user}, è più alto del computer: ${computer}, hai vinto!`);
    }

})





