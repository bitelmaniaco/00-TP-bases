"use strict";
(() => {
    // declaro
    //! primera forma
    let flash = {
        nombre: 'Barry',
        edad: 24,
        poderes: ['Velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        nombre: "clarck",
        edad: 24,
        poderes: ['volar', 'vision X'],
    };
    console.log(superman.getNombre);
    // flash = {
    //     nombre: 'Paco',
    //     edad: 45,
    //     poderes: ['Bajar al bar', 'Opinar desde la barra'],
    //     getNombre(){
    //         return this.nombre;
    //     }
    // }
})();
