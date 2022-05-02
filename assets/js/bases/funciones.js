//Funciones: sirve para encapsular la logica de un procedimiento que tendremos que reutilizar varias veces.

//Sintaxis(no se recomienda usar asi)
function saludar(){
    console.log("Hola mundo")
}
//Siempre guardarla en una variable y no ponerle nunmbre despues de function ----> Se la conoce como funcion anonima
const saludar2 = function (){
    console.log("Hola mundo desde la funcion anonima")
}
//Llamada a la funcion para que se ejecute
saludar()
saludar2()

//Usar argumentos

// let valor = prompt("Cual es su nombre");
let valor = "Leandro Cornaglia"
const saludar3 = function(nombre){
    console.log("Hola " + nombre)
}

saludar3(valor)

//Usar argumentos en una funcion que no se utilizan cuando la declaras

const saludar4 = function(nombre){
    console.log(nombre)
    console.log(arguments) // para imprimir los demas valores que se pasan como parametro cuando llamamos a la funcion
}

saludar4("Fernando", 222, true , "fin")

//Funciones de flecha, landa function o arrow function
//Sina argumento
const funcionFlecha = ()=> {
    console.log("hola function flecha")
}
funcionFlecha()

//Con argumento

const flechaConArgumento = (nombre, edad) => {
    console.log("Hola " + nombre + ". Con " + edad + " de edad") 
}

const getAleatorio = () => Math.random()
console.log(getAleatorio())

