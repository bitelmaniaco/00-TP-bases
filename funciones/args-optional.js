"use strict";
(() => {
    //al llevar el implicito string
    // es parametro obligatorio
    const fullName = (primerito, segundito) => {
        return `${primerito}  ${segundito}`;
    };
    const nombrecito = fullName('Paco', 'Olmos');
    console.log({ nombrecito });
})();
