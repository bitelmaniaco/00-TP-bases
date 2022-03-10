(() => {

    type Vengador = {
        nombre: string;
        herramienta: string;
    }

    const ironman: Vengador = {
        nombre: 'Ironman',
        herramienta: 'Traje'
    }

    const spiderman: Vengador = {
        nombre: 'Spiderman',
        herramienta: 'Telaraña'
    }

    const capi: Vengador = {
        nombre: 'Capitan America',
        herramienta: 'Escudo'
    }

    // guardamos para el ejercicio en un array
    //! siempre declarar el tipo
    const vengadores: Vengador[] = [ ironman, spiderman, capi];

    //
    for(const vengador of vengadores){
        console.log(vengador);

    }

    
})()