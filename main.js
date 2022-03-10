"use strict";
(() => {
    const vengadores = {
        furia: 'Samuel L. Jackson',
        ironman: 'Borracho Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    };
    const { furia, poder } = vengadores;
    console.log(furia, poder);
    const heroesArr = ['Batman', 'Superman', 'Spiderman', 'Ironman'];
    const [batman, , spiderman] = heroesArr;
    console.log(batman, spiderman);
})();
(() => {
    const ironman = {
        nombre: 'Ironman',
        herramienta: 'Traje'
    };
    const spiderman = {
        nombre: 'Spiderman',
        herramienta: 'Telaraña'
    };
    const capi = {
        nombre: 'Capitan America',
        herramienta: 'Escudo'
    };
    const vengadores = [ironman, spiderman, capi];
    for (const vengador of vengadores) {
        console.log(vengador);
    }
})();
(() => {
    console.log('poco del ES6');
})();
//# sourceMappingURL=main.js.map