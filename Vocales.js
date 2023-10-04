function countVowels(str) {
    const vowels = 'áéíóúÁÉÍÓÚ';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

const inputString = "Hello, World!";
const vowelCount = countVowels(inputString);
console.log("Number of vowels:", vowelCount);
