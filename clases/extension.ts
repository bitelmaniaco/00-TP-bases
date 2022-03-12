(() => {

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

    console.log(wolverine.getNombreReal());
})()