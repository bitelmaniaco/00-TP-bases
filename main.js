"use strict";
(() => {
    class Mutante {
        constructor(nombre, nombreReal) {
            this.nombre = nombre;
            this.nombreReal = nombreReal;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a salvo!';
        }
    }
    class Villian extends Mutante {
        destruirMundo() {
            return 'Mundo destruido';
        }
    }
    console.log('CLASES ABSTRACTAS');
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    console.log(wolverine);
    console.log(magneto);
    console.log(wolverine.salvarMundo());
    console.log(magneto.destruirMundo());
    const imprimirNombre = (caracter) => {
        console.log(caracter.nombreReal);
    };
    imprimirNombre(magneto);
})();
(() => {
    console.log('BASICA');
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
    console.log('Basico es: ', Vengador.getEdadMedia());
})();
(() => {
    console.log('CONSTRUCTOR PRIVADO');
    class Apocalipsis {
        constructor(nombre) {
            this.nombre = nombre;
        }
        static llamadaApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy el Apocalipsis');
            }
            return Apocalipsis.instance;
        }
        cambioNombre(nuevoNombre) {
            this.nombre = nuevoNombre;
        }
    }
    const apocalipsis1 = Apocalipsis.llamadaApocalipsis();
    const apocalipsis2 = Apocalipsis.llamadaApocalipsis();
    apocalipsis1.cambioNombre('Paco Olmos');
    console.log(apocalipsis1, apocalipsis2);
})();
(() => {
    console.log('EXTENSION');
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
        get getNombres() {
            return `${this.nombre} - ${this.nombreReal}`;
        }
        set setNombre(no) {
            if (no.length < 3) {
                throw new Error('Nombre mayor a 3 letras Bitte!!');
            }
            this.nombre = no;
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
    console.log('FUNCION HEREDADA');
    console.log(wolverine.getNombreReal());
    console.log('CON GETTERS');
    console.log(wolverine.getNombres);
    console.log('SETTERS');
    wolverine.setNombre = 'Lobezno';
    console.log(wolverine.getNombres);
})();
//# sourceMappingURL=main.js.map