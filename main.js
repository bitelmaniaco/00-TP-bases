"use strict";
(() => {
    class Vengador {
        constructor(nombre, equipo, nore, edad) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nore = nore;
            this.edad = edad;
        }
        static getEdadMedia() {
            return this.name;
        }
        biografia() {
            return `${this.nombre} (${this.equipo})`;
        }
    }
    Vengador.edadMedia = 35;
    console.log(Vengador.getEdadMedia());
})();
(() => {
    class Vengador {
        constructor(nombre, nombreReal) {
            this.nombre = nombre;
            this.nombreReal = nombreReal;
            console.log('creado ');
        }
        biografia() {
            return `${this.nombre} (${this.nombreReal})`;
        }
        getNombre() {
            return this.nombre;
        }
    }
    class Xmen extends Vengador {
        constructor(na, reNo, esMutante) {
            super(na, reNo);
            this.esMutante = esMutante;
        }
        getNombreReal() {
            return super.getNombre();
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    console.log(wolverine.getNombreReal());
})();
//# sourceMappingURL=main.js.map