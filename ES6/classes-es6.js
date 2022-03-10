
(() => {

    class Vengador {
        nombre;
        poder;
        constructor(no = 'sin nombre', po=0){
            this.nombre = no;
            this.poder = po;
        }
    }

    class vengadorVolador extends Vengador{
        volador;

        constructor(na, pow){
            super(na, pow);
            volador = true;
        }
    }

    const hulk = new Vengador('Hulk', 9001);
    const falcon = new vengadorVolador('Falcon', 12);

    console.log(hulk);

})()

