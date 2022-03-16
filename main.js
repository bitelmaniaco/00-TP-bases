"use strict";
var Validaciones;
(function (Validaciones) {
    Validaciones.validarTexto = (texto) => {
        return (texto.length > 3) ? true : false;
    };
    const validarFecha = (fecha) => {
        return (isNaN(fecha.valueOf())) ? false : true;
    };
})(Validaciones || (Validaciones = {}));
//# sourceMappingURL=main.js.map