let userInput = prompt("Ingresa un número: ");
let number = Number(userInput);
let components = [1];
let result = 1;

function calculateFactorial() {
    let factorial;
    if (number === 0) {
        factorial = 1;
    } else {
        factorial = findFactorial();
    }
    return factorial;
}

function findFactorial() {
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

let factorialResult = calculateFactorial();
console.log("El factorial es " + factorialResult);