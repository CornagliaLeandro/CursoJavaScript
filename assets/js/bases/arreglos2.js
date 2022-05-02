// propiedades y metodos basicos que tienen los arreglos, metoso funciones internas de los arreglos y propiedades variable de los arreglos

let juegos = ["zerlda", "Mario", "Metroid", "Chrono"];

console.log("largo:", juegos.length);

// Asiganmos a primero el valor de la posicion 0 del arreglo( zerla)
let primero = juegos[0];
// Asiganmos a ultimo el valor de la ultima posicion  del arreglo(en este caso chrono)
let ultimo = juegos[juegos.length - 1];

console.log(primero);
console.log(ultimo);

// con las llaves hacemos referencia a un objeto(esto imprime primero;¿:Zerla, y ultimo;Chrono)
console.log({ primero, ultimo });

// recorremos el arreglo completo con el foreach, le indicamos que queremos q imprima el valor del elemento, su indice y el array completo
juegos.forEach( (elemento, indice, arr) => {
console.log(elemento, indice, arr);
})

// para insertar elemento al final a un arreglos
juegos.push("Lean")
console.log(juegos)
let indiceDelElemento2 = juegos.indexOf("Chrono")
console.log(indiceDelElemento2 + " Indice")

// para insertar elemento al principio a un arreglos
juegos.unshift("Agus")
console.log(juegos)

// para borrar el ultimo elemento del arreglo y lo regresa
let juegoBorrado = juegos.pop()
console.log(juegos)
console.log(juegoBorrado, juegos)
console.log({ juegoBorrado, juegos })

// para borrar un elemento deseado del arreglo
let pos = 1
console.log(juegos)
let juegosBorrados = juegos.splice(pos, 2)
console.log({ juegoBorrado, juegos })

// como saber la posicion de determinado elemento
let indiceDelElemento = juegos.indexOf("Chrono")
console.log(indiceDelElemento)



