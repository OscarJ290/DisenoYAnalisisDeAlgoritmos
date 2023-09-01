function findMinAndSort(arr) {
    const n = arr.length;

    // Encuentra el menor elemento y su índice en el arreglo
    let minIndex = 0;
    for (let i = 1; i < n; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }

    // Intercambia el menor elemento con el primer elemento
    [arr[0], arr[minIndex]] = [arr[minIndex], arr[0]];

    // Ordena el arreglo restante de menor a mayor
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

const inputArray = [7, 3, 9, 1, 5];
const sortedArray = findMinAndSort(inputArray);
console.log(sortedArray);
