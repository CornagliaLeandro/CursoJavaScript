// los objetos literales sin ibjetos que tienen pares de valores
// Propieda(key o llave) : valor


const personaje = {
    nombre: "Tony Stak",
    codeName: "Iromand",
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70,
    },
    trajes: ["MArk I", "Mark v", "Hulkbuster"],
    direccion: {
        zip:"10880, 90265",
        ubicacion: "Malibu, California"
    },
    "ultima-Pelicula" : "Infinity War"
};

console.log("Nombre:", personaje.nombre)
console.log(personaje)
console.log("Nombre:", personaje["nombre"])
console.log("edad:", personaje.edad)

console.log("coors: ", "Latitud", personaje.coords.lat, " y lgn: ", personaje.coords.lng)
console.log("numeros de trajes: ", personaje.trajes.length)
console.log("ultimo traje: ", personaje.trajes[personaje.trajes.length - 1])
const x = "vivo";
console.log("Vivo: ", personaje[x])
console.log("ultima peli: ", personaje["ultima-Pelicula"])

// mas detalles
//borrar una propiedad del objeto

delete personaje.edad ;
console.log(  {personaje} )

//trabajar un objeto como un arreglo

const entriesPAres = Object.entries(personaje);
console.log(entriesPAres)

//si declaras el objeto personaje como const, te permite agregarle o borrarle propiedades, pero no te permite asignarle un VALOR TOTAL al objeto declarado como CONST en si. PAra hacer un bloqueo de las propiedades o modificaciones se utiliza el Object.freeze

Object.freeze(personaje)
personaje.dinero = 3000000
console.log(personaje)
 personaje.direccion.ubicacion = "Costa Rica"
 console.log(personaje)


 // Listado de todas las propiedades que tiene un objeto y las mostramos como arreglo

 const propiedades = Object.getOwnPropertyNames(personaje);
 console.log({ propiedades})

 //Listado de todas las propiedades y valores que tiene un objeto y las mostramos como arreglo
 const valores = Object.values( personaje)
 console.log({ propiedades, valores})

 //developer.mozilla.org infografia de javaScript




