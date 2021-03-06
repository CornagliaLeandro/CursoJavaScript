
//Clases en javascript...'use strict' viene por defecto implementado en las clases
// usar THIS para hacer referencia  a la instancia de esa clase
class Persona{

//
    static conteo = 0;
    nombre = '';;
    codigo = '';;
    frase = '';
//Constructor con parametros
    constructor(nombre, codigo, frase){
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

//setters y getters

set setComidaFavorita(comida){
    this.comida = comida;
}

get getComidaFavorita(){
    return this.comida;
}

        quienSoy(){
            console.log(` Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
        }

        miFrase(){
            console.log(`Mi frase es ${ this.frase }`);
        }
}

const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigable vecino');
const batman = new Persona('Bruno Diaz', 'Batman', 'Soy tu vecino');
spiderman.setComidaFavorita = 'Me gusta mucho comer asado'

console.log({ spiderman});
console.log({ batman});
spiderman.quienSoy();
batman.quienSoy();
spiderman.miFrase();
batman.miFrase();
Persona.propiedadExterna = 'Hola Mundo'; // No hacer!!!
console.log( Persona.propiedadExterna)
console.log( Persona)