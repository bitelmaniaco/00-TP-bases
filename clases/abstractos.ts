(() => {

    abstract class Mutante{

        constructor(
            public nombre: string,
            public nombreReal: string,
        ){

        }
    }

    class Xmen extends Mutante {

        salvarMundo(){
            return 'Mundo a salvo!';
        }
    }
    class Villian extends Mutante{

        destruirMundo(){
            return 'Mundo destruido';
        }
    }
    
    console.log('CLASES ABSTRACTAS');
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');

    console.log(wolverine);
    console.log(magneto);

    console.log(wolverine.salvarMundo());
    console.log(magneto.destruirMundo());

    const imprimirNombre = (caracter: Mutante ) => {
        console.log( caracter.nombreReal );
    }

    imprimirNombre(magneto);

})()