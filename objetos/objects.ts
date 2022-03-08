( () => {

    // declaro
    //! primera forma
    let flash: {nombre: string, edad: number, poderes: string[], getNombre?: () => string} = {
        nombre : 'Barry',
        edad: 24,
        poderes: ['Velocidad', 'Viajar en el tiempo']
    }
    
    //nos creamos un tipo
    //! puede terminar en , o bien ;
    type Heroe = {
        nombre: string,
        edad?: number,
        poderes: string[],
        getNombre?:() => string;
    } 

    let superman: Heroe = {
        nombre : "clarck",
        edad: 24,
        poderes: ['volar', 'vision X'],
    }
    console.log(superman.getNombre);

    // flash = {
    //     nombre: 'Paco',
    //     edad: 45,
    //     poderes: ['Bajar al bar', 'Opinar desde la barra'],
    //     getNombre(){
    //         return this.nombre;
    //     }
    // }


}) ()