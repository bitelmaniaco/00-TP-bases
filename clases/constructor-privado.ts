(() => {
    console.log('CONSTRUCTOR PRIVADO');

    class Apocalipsis {

        static instance: Apocalipsis;


        private constructor( public nombre: string ){

        }

        //!principio singleTon
        static llamadaApocalipsis(): Apocalipsis{
            if ( !Apocalipsis.instance ){
                Apocalipsis.instance = new Apocalipsis('Soy el Apocalipsis');
            }

            return Apocalipsis.instance;
        } 

        cambioNombre(nuevoNombre: string):void {
            this.nombre = nuevoNombre;
        }
    }

    const apocalipsis1 = Apocalipsis.llamadaApocalipsis();
    const apocalipsis2 = Apocalipsis.llamadaApocalipsis();
    
    apocalipsis1.cambioNombre('Paco Olmos')

    // const apocalipsis = new Apocalipsis('Soy Apocalipsis... el único');
    console.log(apocalipsis1, apocalipsis2);


})()