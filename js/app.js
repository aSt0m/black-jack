

//H: Hearts
//D: Diamonts
//S: Spades
//C: Clubs
//A: As
//J: J
//Q: Queen
//K: King
let deck = [];
let tipos = ['H','D','S','C'];
let especiales = ['A','J','Q','K'];

function crearDeck(){

    
    for( let i = 2; i <=10; i++){
        tipos.forEach((tipo)=>{
        
        deck.push( tipo + i )
    })
    
}
tipos.forEach(( tipo )=>{
    especiales.forEach(( esp )=>{
        deck.push( tipo + esp )
    })
})

deck = _.shuffle( deck );
console.log( deck )
return deck

}
crearDeck()

//Esta función me permite tomar una carta

const pedirCarta = ()=>{
    if( deck.length == 0 ){
        throw 'Se te acabaron las cartas amiguito'
    }

    let carta = deck.pop()
    console.log( deck )
    
    return carta
    }
pedirCarta()