
//Clases en javascript...'use strict' viene por defecto implementado en las clases
// usar THIS para hacer referencia  a la instancia de esa clase
class Persona{

    nombre = '';;
    codigo = '';;
    frase = '';
//Constructor con parametros
    constructor(nombre, codigo, frase){
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
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

console.log({ spiderman});
console.log({ batman});
spiderman.quienSoy();
batman.quienSoy();
spiderman.miFrase();
batman.miFrase();