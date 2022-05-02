const carros = [ "Ford", "Mazda", "Honda", "Toyota"];
let cont = 0;
while(cont < carros.length){
   
    console.log(carros[cont]);
    cont++;
}
//undefined, null y false, son considerados falsos en la condicion

while(cont < carros.length){
    if (let === 1){
        //break....con el break indicamos que si la condicion del if se cumple rompa el loop completamente del while
        cont++;
        continue;//con continue lo q hace es terminar la vuelta q se esta ejecutando, pero a diferencia del break sigue entrando en el while.
    }

    console.log(carros[cont]);
    cont++;
}

console.warn("Do-while");
let j = 0;

do {
    console.log(carros[j]);
    j++;
} while ( j < carros.length);