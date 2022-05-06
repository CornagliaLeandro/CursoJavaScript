//para declarar propiedade sy metodos privados en javascript, agregarle el numerar(#) delante del nombre de la variable o metodo

class Rectangulo{

    area = 0;

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;
    
        this.area = base * altura;
    }

    set setBase(base){
        this.base = base;
    }

    get getBase(){
        return this.base;
    }

    set setAltura( altura){
        this.altura = altura;
    }

    get getAltura(){
        return this.altura;
    }


    decirArea(){
        return ` El area del rectangulo es : ${ this.area}`
    }
}

const rec = new Rectangulo( 10, 15)
console.log(rec.decirArea());
console.log({ rec })