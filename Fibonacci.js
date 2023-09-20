function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function genSec(length) {
    let sequence = [];
    for (let i = 0; i < length; i++) {
        sequence.push(fibonacci(i));
    }
    return sequence;
}

function main() {
    let entrada = prompt("Cantidad de elementos: ");
    entrada = parseInt(entrada, 10);

    if (isNaN(entrada) || entrada < 1) {
        console.log("La entrada debe ser un número entero mayor o igual a 1.");
        return;
    }

    let SecFibonacci = genSec(entrada);
    console.log("Secuencia de Fibonacci:", SecFibonacci);
}

main();

