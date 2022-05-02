const heroes = [ "batman", "Superman", "Mujer maravilla", "Aquaman"]

console.warn("For tradicional");
for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i] + " desde for")
}

console.warn("For in")
for(let h in heroes){// h toma el numero de posicion del elemento, por eso usamos el arreglo y dentro h
    console.log(heroes[h])
}

console.warn("For of")

for (let heroe of heroes) {//He toma el valor de cada elemento.
    console.log(heroe)
}