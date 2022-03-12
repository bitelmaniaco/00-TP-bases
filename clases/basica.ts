(() => {
    console.log('BASICA');
    class Vengador {
        
        // private nombre: string;
        // public equipo: string;
        // public nombreReal: string;
        // public edad: number;
        static edadMedia: number = 35;
        static getEdadMedia(){
            return this.name;//devuelve el nombre de la clase
        }

        constructor(
            private nombre: string, 
            public equipo: string,
            public nore: string, 
            public edad: number
        ){}

        public biografia(){
            return `${ this.nombre } (${ this.equipo })`;
        }
    }

    // const antman: Vengador = new Vengador();
    console.log('Basico es: ', Vengador.getEdadMedia());

})()