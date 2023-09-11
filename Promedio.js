class Main {
    constructor() {
        this.A = [];
    }

    validarenter() {
        let entradausuario = prompt("Nuevo elemento");
        let resultado;
        entradausuario = parseInt(entradausuario);
        if (Number.isInteger(entradausuario)) {
            this.A.push(entradausuario);
            resultado = 0;
            console.log("El nuevo elemento es " + entradausuario);
        } else {
            resultado = 4;
            console.log("La entrada no es un número entero");
        }
        return resultado;
    }

    generararreglo() {
        let longitud = prompt("Longitud del arreglo:");
        longitud = parseInt(longitud);
        for (let i = 0; i < longitud; i++) {
            this.validarenter();
        }
    }

    promedio() {
        let promedio;
        let suma = 0;
        const longitud = this.A.length;
        for (let i = 0; i < longitud; i++) {
            suma += this.A[i];
        }
        promedio = suma / longitud;
        return promedio;
    }

    run() {
        this.generararreglo();
        const salida = this.promedio();
        console.log("El promedio es " + salida);
    }
}

const mainInstance = new Main();
mainInstance.run();
