(() => {

    console.log('EXTENSION');

    class Vengador{
        constructor(
            public nombre: string,
            public nombreReal: string,
        ){
            console.log('creado ');
        }


        private biografia(){
            return `${ this.nombre } (${ this.nombreReal })`;
        }

        protected getNombre(){
            return this.nombre;
        }

        get getNombres(){
            return `${ this.nombre } - ${ this.nombreReal }`;
        }

        set setNombre(no: string){

            if(no.length < 3){
                throw new Error('Nombre mayor a 3 letras Bitte!!');
            }
            this.nombre = no;
        }
    }

    class Xmen extends Vengador{
        
        constructor(
            na: string,
            reNo: string,
            public esMutante: boolean
            ){
            super(na, reNo)
        }

        getNombreReal(){
            return super.getNombre();
        }

    }

    const wolverine = new Xmen('Wolverine','Logan', true);

    console.log(wolverine);
    
    console.log('FUNCION HEREDADA');
    console.log(wolverine.getNombreReal());

    console.log('CON GETTERS')
    console.log(wolverine.getNombres);

    console.log('SETTERS');
    wolverine.setNombre = 'Lobezno';
    console.log(wolverine.getNombres);

})()