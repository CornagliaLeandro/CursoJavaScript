const dia = 4; // 0: Domingo

// let dia = prompt("Ingrese el dia")

switch(Number(dia)){
    case 0 : console.log(`El dia ingresado es Domingo`); break;
    case 1 : console.log(`El dia ingresado es Lunes`); break;;
    case 2 : console.log(`El dia ingresado es Martes`); break;
    case 3 : console.log(`El dia ingresado es Miercoles`); break;
    case 4 : console.log(`El dia ingresado es Jueves`); break;
    case 5 : console.log(`El dia ingresado es Viernes`); break;
    case 6 : console.log(`El dia ingresado es Sabado`); break;
    default: console.log(`El dia ingresado es invalido`); break;
}

