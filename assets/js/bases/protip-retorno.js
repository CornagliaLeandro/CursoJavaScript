
function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}

const persona = crearPersona("Leandro", "Cornaglia")
console.log(persona)

//En ECMAScript 6 cuando queremos retornar algo en un objeto uy el nombre de la propiedad es exactamente el mismo del nombre de la variable de la cual queremos hacer la impresion, no hace falta que especifiquemos nombre : nombre ( dos veces)

function crearPersona2(nombre, apellido) {
    return {
        nombre,
        apellido
    }
}

const persona2 = crearPersona2("Adelqui", "Cornaglia")
console.log(persona2)

///Crear lo mismo pero con funcion de flecha

const crearPersona3 = (nombre, apellido) => {
    return { 
         nombre: nombre,
         apellido: apellido }
}

const persona3 = crearPersona3("Federico", "Cornaglia")
console.log(persona3)

//retornar en una sola linea agregando parentesis para que entienda q es un objeto y no una referencia a los argumentos
const crearPersona4 = (nombre, apellido) => ({ nombre,apellido })

const persona4 = crearPersona4("Santiago", "Cornaglia")
console.log(persona4)


//
function  imrpimeArgumentos(){
    console.log(arguments)
}

imrpimeArgumentos("Leandro", true, false, 10, 34)

//imprime solo el primer argumento, en este caso Leandro
const imprimeArgumentos2 = ( args ) => {
    console.log( args )
}
imprimeArgumentos2("Leandro", true, false, 10, 34)
//Para que imprima todos los argumentos hay que usar una referencia a un parametro rest, el cual le dice que todos los argumentos que sean enviados  a la funcion, cree un arreglo con cada uno de ellos
//A tener en cuenta: 1- Luego del parametro REST no puede venir otro argumento. 2-Si se pone un parametro antes del parametro REST, va a tener su propio valor independiente
const imprimeArgumentos3 = ( ...args ) => {
    console.log( args )
}
imprimeArgumentos3("Leandro", true, false, 10, 34)

const imprimeArgumentos4 = ( ...args ) => {
    // console.log( args )
    return args
}

//PAra referenciar un nombre a cada elemento del arreglo se utilizan los [] y el nombre de la propiedad. Si no asignamos un nombre de propiedad para un elemento ese mismo no sera parte del objeto
const [numero, verdadero, falso, nombre, saludo] = imprimeArgumentos4(10, true, false, "Fernando", "Hola")
console.log({ numero, verdadero, falso, nombre, saludo })

//La funcion crea un objeto, y de esta forma podemos obtener solo una propiedad del mismo
//Si se quiere cambiar el alias a apellido se usa... apellid: nuevoApellido
const { apellido } = crearPersona("Fernando", "Herrera")
console.log({ apellido })

//DEstruccturacion de argumentos IMPORTANTEs

const tony = {
    nombre: "Tony Stak",
    codeName: "Iromand",
    vivo: false,
    edad: 40,
    trajes: ["MArk I", "Mark v", "Hulkbuster"],
};


// No es buena practica definir una funcion debajo del codigo!!

const imprimePropiedas = ( personaje ) => {
    console.log(personaje.nombre)
    console.log(personaje.codeName)
    console.log(personaje.vivo)
    console.log(personaje.edad)
    console.log(personaje.trajes)
}

imprimePropiedas(tony)
// Aqui viene la desestructuracion de argumentos
// si pongo llaves {} dentro de los parentesis de argumentos puedo extraer las propiedades que me interezan de ese objeto.
//Si paso porm parametro una propiedad no existente en el objeto a la hora de declarar, le puedo asignar un valor y asi agregarselo al objeto
const imprimePropiedas2 = ( { nombre, codeName, vivo, edad, trajes, sexo = 9}) => {
  console.log({nombre})
  console.log({codeName})
  console.log({vivo})
  console.log({edad})
  console.log({trajes})
  console.log({sexo})
}

imprimePropiedas2(tony)
console.log(tony)
