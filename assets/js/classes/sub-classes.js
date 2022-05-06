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


    class Heroe extends Persona{
        clan = ' sin clan ';
        constructor(){
            super('Agus', 'Bubi', 'sushi');
        }
    }
    
    const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigable vecino');
    const heroe = new Heroe('Leandro', 'Lean', 'soy developers' );
    console.log(heroe.quienSoy())