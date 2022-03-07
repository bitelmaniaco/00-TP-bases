
(() => {
    //al llevar el implicito string
    // es parametro obligatorio
    const fullName = ( primerito:string, segundito:string ): string => {

        return `${ primerito }  ${ segundito}`;

    }

    const nombrecito = fullName('Paco', 'Olmos');

    console.log({ nombrecito });


})()