//Cuando trabajamos con primitivos, cualquier tipo de asigancion como la q vemos o cuando la pasamos por argumento en una funcion, lo estamos  mandando por valor. No importa si transformamos la variable o si le asiganmos otra cosa, no estamos afectando el mismo lugar en memoria, estamos pasando unicamente el valor

let a = 10;
let b = a;
a=30;
console.log({a,b});

//Todos los primitivos se pasan por valor
//Y en javascript todos los objetos son pasados por referencia.
//todos son objetos exceptuando los primitivos

let juan = { nombre: "juan"} // se guarda en un espacio de memoria
let ana = juan; // cuando hacemos esta asignacion, estamos apuntando al mismo espacio de memoria
ana.nombre = "ana"//por eso cuando cambiamos "ana", tambien cambiamos a "juan"

console.log( {juan, ana })

//esto imprime { ana: { nombre: ana}}, { juan: {nombre: ana}}



const cambiarNombre = ( persona ) => {
    persona.nombre = "tony";
    return persona;
}

let peter = { nombre: "Peter"};
let tony = cambiarNombre( peter)
console.log({peter, tony})

const cambiarNombre2 = ({ ...persona2 }) => {
    persona2.nombre = "tony2";
    return persona2;
}

let peter2 = { nombre: "Peter2"};
let tony2 = cambiarNombre2( peter2)
console.log({peter2, tony2})

//Hay varias formas para solucionar q la copia de un objeto no afecte a otro.
// Al utilizar el operador SPRET    "..." simboliza "separa los elementos". La ventaja de hacerlo de esta  manera es que tambien rompe la referencia que hay en javascript y de esa manera poder trabajar objetos y hacer igualaciones que apunten a diferente espacios de memoria.

let juan2 = { nombre: "juan2"}
let ana2 =  { ...juan2 }
ana2.nombre = "ana2"
console.log( {juan2, ana2 })



//Arreglos
const frutas = [ "Manzana", "Pera", "Piña" ]
// mal ser objetos tienen el mismo espacio de memoria
const otrasFrutas = frutas;

otrasFrutas.push("Mango")
console.table({frutas, otrasFrutas})

const frutas2 = [ "Manzana2", "Pera2", "Piña2" ]
//a frutas2 lo encierro entre corchetes porque estoy creando un nuevo arreglo
const otrasFrutas2 = [ ...frutas2 ];

otrasFrutas2.push("Mango2")
console.table({frutas2, otrasFrutas2})

const frutas3 = [ "Manzana3", "Pera3", "Piña3" ]
//Uso el slice() es un metodo que corta el arreglo y regresame los elemntos q especifico, pero si no mando ningun argumento regresa un nuevo arreglo rompiendo dicha relacion
const otrasFrutas3 = frutas3.slice() ;

otrasFrutas3.push("Mango3")
console.table({frutas3, otrasFrutas3})
//---------------------------------------------
//Ver cual es mejor
const frutas4 = [ "Manzana4", "Pera4", "Piña4" ]

console.time("slice")//slice: 0.005859375 ms
const otrasFrutas4 = frutas4.slice() ;
console.timeEnd("slice")

console.time("spread")//spread: 0.0048828125 ms
const otrasFrutas5 = [...frutas4]
console.timeEnd("spread")


