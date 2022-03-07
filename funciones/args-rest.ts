(() => {

    const nombreCompleto = ( nombre: string, ...restosArgumentos: string[] ):string => {
        return `${ nombre } ${ restosArgumentos.join('') }` 
    }

    const nombre = nombreCompleto('Paco', 'Olmos', 'Berrocoso');

    console.log({ nombre });

})()