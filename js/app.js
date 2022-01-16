

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



let btnPedirCarta = document.querySelector('.btn-pedir');
let btnNuevo = document.querySelector('.btn-nuevo');
let btnDetener = document.querySelector('.btn-detener');

const divBotones = document.querySelector('#divBotones');
const player = document.querySelector('.player');

const divJugador = document.querySelector('.jugador');
const divImg = document.querySelector('img')

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
        console.log(`El valor es de una letra, vale ${valor}`);

    } else {

        puntos = valor * 1;
        // console.log( "Es numero")
        // console.log( puntos );
    }
    return puntos

}
// valorCarta( "ds" );


//Eventos
btnPedirCarta.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    player.innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `cartas/${carta}.png`
    imgCarta.classList = 'cartas';

    divJugador.append(imgCarta);

    if (puntosJugador > 21) {
        btnPedirCarta.disabled = 'true';
       
        console.log(`Tienes: ${puntosJugador} puntos, perdiste`)
        loser.style.visibility  = 'visible'
        
    } else if (puntosJugador === 21) {
        {
            
            console.log("Conseguiste 21 Ganaste")
            btnPedirCarta.disabled = 'true';
            win.style.visibility = 'visible'
            
            
        }
    }


});

btnNuevo.addEventListener('click', ()=>{
    location.reload()
})



// const botonNuevo = document.createElement('button');
// divBotones.append(botonNuevo);
// botonNuevo.innerText = "Botoncito"
// botonNuevo.classList.add("btn-nuevo", "btn")


