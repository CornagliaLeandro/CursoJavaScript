const elMAyor = ( a, b) => a > b ? `El mayor de los dos es ${ a }` : `El mayor de los dos es ${ b } `;
console.log(elMAyor(84, 16))

const tieneMembresia = ( miembro) => (miembro) ? ` 2 dolares` : `10 dolares`
console.log(tieneMembresia(false))

const amigo = false;
const amigosArr= [
    "Peter",
    "Tony",
    "Dr. Strange",
    amigo ? " Thor " : " Loki ",
    // ( () => " Nick Fury") ()
    elMAyor(10, 15)
];

console.log({ amigosArr})

//If ternarios anidados
const nota = 82.5; // A + A B + B
const grado = nota >= 95 ? "A+" : 
                nota >= 85 ? "A" : 
                nota >= 90 ? "B+" : 
                nota >= 80 ? "B" : 
                nota >= 75 ? "C+" : 
                nota >= 70 ? "C" : "F" ;

                console.log({ nota, grado})