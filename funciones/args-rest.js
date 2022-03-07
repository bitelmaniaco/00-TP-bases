"use strict";
(() => {
    const nombreCompleto = (nombre, ...restosArgumentos) => {
        return `${nombre} ${restosArgumentos.join('')}`;
    };
    const nombre = nombreCompleto('Paco', 'Olmos', 'Berrocoso');
    console.log({ nombre });
})();
