(() => {

    const vengadores = {
        furia: 'Samuel L. Jackson',
        ironman: 'Borracho Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }

    // busca la propiedad con ese nombre
    const { furia, poder } = vengadores;

    console.log( furia, poder );


    // arreglos
    const heroesArr: string[] = ['Batman', 'Superman', 'Spiderman', 'Ironman'];

    const [ batman, , spiderman ] = heroesArr;

    console.log(batman, spiderman);

})()