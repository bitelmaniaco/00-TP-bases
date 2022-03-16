(() => {

    interface Xmen {
        nombre: string;
        nombreReal: string;
        poderMutante( id: number ): string;
    }

    interface SerHumano{
        edad: number;
    }

    class Mutante implements Xmen, SerHumano {
        public edad: number = 0;
        public nombre: string = '';
        public nombreReal: string = '';

        poderMutante(id: number): string {
            return this.nombre + ' ' + this.nombreReal;
        }


    }



})()