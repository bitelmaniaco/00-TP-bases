namespace Validaciones {

    export const validarTexto = ( texto: string ): boolean => {
        // if(texto.length > 3 ){
        //     return true;
        // } else{ 
        //     return false;
        // }
        return ( texto.length > 3 ) ? true : false;
    }

    const validarFecha = (fecha: Date ): boolean => {
        return ( isNaN( fecha.valueOf() ) ) ? false : true;
    }



}