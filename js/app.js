


(() =>{

'use strict'
    
//H: Hearts
//D: Diamonts
//S: Spades
//C: Clubs
//A: As
//J: J
//Q: Queen
//K: King
let deck = [];
let tipos = ['H', 'D', 'S', 'C'];
let especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosComputadora = 0;



let btnPedirCarta = document.querySelector('.btn-pedir');
let btnNuevo = document.querySelector('.btn-nuevo');
let btnDetener = document.querySelector('.btn-detener');
let neu = document.querySelector('.neu');

const divBotones = document.querySelector('#divBotones');
const player = document.querySelector('.player');
const computerCounter = document.querySelector('.computer')

const divComputadora = document.querySelector( '.computadora-cartas');
const divJugador = document.querySelector('.jugador-cartas');
const divImg = document.querySelector('img')
const cartas = document.querySelector('.cartas');

const siteHeader = document.querySelector('.site-header');
const loser = document.querySelector('.loser');
const win = document.querySelector('.win')
function crearDeck() {


    for (let i = 2; i <= 10; i++) {
        tipos.forEach((tipo) => {

            deck.push(i + tipo)
        })

    }
    tipos.forEach((tipo) => {
        especiales.forEach((esp) => {
            deck.push(esp + tipo)
        })
    })

    deck = _.shuffle(deck);
    console.log(deck)
    return deck

}
crearDeck()

//Esta función me permite tomar una carta

const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'Se te acabaron las cartas amiguito'
    }

    let carta = deck.pop()
    console.log(deck)

    console.log(carta)
    return carta
}


function valorCarta(carta) {

    let valor = carta.substring(0, carta.length - 1);
    console.log(valor);
    let puntos = 0;
    if (isNaN(valor)) {
        if (valor === 'A') {
            valor = 11;
            
        } else {
            valor = 10;
        }
        return valor;
        

    } else {
        
        puntos = valor * 1;
        // console.log( "Es numero")
        // console.log( puntos );
    }
    return puntos
    
}




//Turno Computadora

const turnoComputadora = ( puntosMinimos )=>{

    do {
        
        
        
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        computerCounter.innerText = puntosComputadora;
        
        const imgCarta = document.createElement('img');
        imgCarta.src = `cartas/${carta}.png`
        
        divComputadora.append( imgCarta );
        imgCarta.classList = 'cartas';
    
        
        if( puntosMinimos > 21 ) {
            
            break;
        }
    } 
    while (( puntosComputadora < puntosMinimos ) && ( puntosMinimos <= 21 ));

    setTimeout(() => {
        
        
        if( puntosComputadora === puntosMinimos ){
           
            alert( "Nadie gana!!")
        } else if( puntosMinimos > 21){
            alert( "Computadora gana!!");
        } else if( puntosComputadora > 21 ){
            alert( "Jugador gana!")
        } else {
            alert('Computadora gana!!')
           
        }
    }, 200);

}



//Eventos
btnPedirCarta.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta( carta );
    player.innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `cartas/${carta}.png`
    imgCarta.classList = 'cartas';

    divJugador.append( imgCarta );
    
    if (puntosJugador > 21) {
        btnPedirCarta.disabled = 'true';
        btnDetener.disabled = 'true';
        console.log(`Tienes: ${puntosJugador} puntos, perdiste`)
        loser.style.visibility  = 'visible'
        turnoComputadora( puntosJugador );
        
    } else if (puntosJugador === 21) {
        {
            
                
                console.log("Conseguiste 21 Ganaste")
                btnPedirCarta.disabled = 'true';
                btnDetener.disabled = 'true';
                
            win.style.visibility = 'visible';
            turnoComputadora( puntosJugador );
            
           
            
        }
    }  

    
});




btnDetener.addEventListener('click', ()=>{
    btnDetener.disabled = true;
    btnPedirCarta.disabled = true;
    turnoComputadora( puntosJugador );
    console.log(` puntos jugador:${puntosJugador} puntos computadora: ${puntosComputadora}`)
   
})



btnNuevo.addEventListener('click', ()=>{
    deck = [];
    deck = crearDeck();
    
    puntosJugador = 0;
    puntosComputadora = 0;

    player.innerText = 0;
    computerCounter.innerText = 0;

    divComputadora.innerHTML = '';
    divJugador.innerHTML = '';
    


    btnDetener.disabled = false;
    btnPedirCarta.disabled = false;

    loser.style.visibility = 'hidden';
    win.style.visibility = 'hidden';

})



})();

