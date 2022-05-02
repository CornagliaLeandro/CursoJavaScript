// Dias de semana abrimos a las 11, pero los fines de semana abrimos a las 9

// Entra a un sitio web para consultar si esta abierto hoy

const dia = 4;// 0: domingo...1:lunes...2;martes...
const horaActual = 10;// domingo a las 10 de la manana

let horaApertura;
let mensaje;//esta abierto, esta cerrado, hoy abrimos a las XX

// lo podemos simplificar con un if ternario que seria (usamos un metodo de un arreglo que sirve para saber si incluye a dia)
// horaApertura = (  [0,6].includes(dia)) ? 9 : 11;

if( dia == 0 || dia == 6){ 

    console.log("Fin de semana")
    horaApertura = 9;
}else {
    console.log("Dia de semana");
    horaApertura= 11
}

// if(horaActual >= horaApertura){
//     mensaje = "esta abierto";
// }else{
//     mensaje = `Esta cerrado, hoy abrimos a las ${ horaApertura }`;
// }
// console.log(mensaje)

mensaje = ( horaActual >= horaApertura) ? ` Esta abierto` : `Esta cerrado, hoy abirmos ${ horaApertura}`
console.log( { mensaje })