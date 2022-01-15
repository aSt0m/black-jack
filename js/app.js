

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
    
    console.log( carta )
    return carta
    }


function valorCarta( carta ){

    let valor = carta.substring( 0, carta.length -1 );
    console.log( valor );
    let puntos = 0;
    if( isNaN( valor ) ){

        
        if( valor === 'A' ){
            valor = 11;
            
        }else{
            valor = 10;
        }
        console.log( `El valor es de una letra, vale ${ valor }`);
    
    }else{
        
        console.log( "Es numero")
        puntos = valor * 1 ;
        console.log( puntos );
    }


}
 valorCarta( "ds" );