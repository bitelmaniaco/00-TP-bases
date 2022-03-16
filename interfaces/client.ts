(() => {

    interface Cliente {
        nombre: string;
        edad?: number;
        direccion: Direccion;
        getDireccion(id: string): string;
    }

    interface Direccion {
        id: number;
        cp: number;
        ciudad: string;
    }

    const cliente1: Cliente = {
        nombre: 'Paco',
        edad: 43,
        direccion: {
            id: 222,
            cp: 28030,
            ciudad: 'MadriZ',
        },
        getDireccion(id: string){
            return this.direccion.ciudad;
        }
    }

})()