// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sumPositiveNumbers = 0;
let totalPositiveNumbers = 0;

// Знайти мінімальний елемент масиву та його порядковий номер.
let minElementNumber = Math.min(...arr); // Нахожу мин. число с помощью spread operator
let minElementIndex = arr.indexOf(minElementNumber); // Вычисляю индекс с помощью метода indexOf

// Знайти максимальний елемент масиву та його порядковий номер.
let maxElementNumber = Math.max(...arr); // Нахожу макс. число с помощью spread operator
let maxElementIndex = arr.indexOf(maxElementNumber); // Вычисляю индекс с помощью метода indexOf

let totalNegativeNumbers = 0;

let totalOddPositiveNumbers = 0;
let totalEvenPositiveNumbers = 0;

let sumEvenPositiveNumbers = 0;
let sumOddPositiveNumbers = 0;

let productPositiveNumbers = 1;

for(let i = 0; i < arr.length; i++) {

    // Знайти суму та кількість позитивних елементів.
    if(arr[i] > 0) {
        totalPositiveNumbers++;
        sumPositiveNumbers += arr[i];

        // Знайти кількість непарних позитивних елементів.
        if(arr[i] % 2 !== 0) {
            totalOddPositiveNumbers ++;

            // Знайти суму непарних позитивних елементів.
            sumOddPositiveNumbers += arr[i];
        }

        // Знайти кількість парних позитивних елементів.
        if(arr[i] % 2 === 0) {
            totalEvenPositiveNumbers ++;

            // Знайти суму парних позитивних елементів.
            sumEvenPositiveNumbers += arr[i];
        }

        // Знайти добуток позитивних елементів.
        productPositiveNumbers *= arr[i];
    }

    // Визначити кількість негативних елементів.
    if(arr[i] < 0) {
        totalNegativeNumbers++;
    }

    // Знайти найбільший серед елементів масиву, остальні обнулити.
    if(arr[i] !== maxElementNumber) {
        arr[i] = 0;
    }
}

console.log(`
    1) Total positive numbers: ${totalPositiveNumbers} | Sum positive numbers: ${sumPositiveNumbers}\n
    2) Min number: ${minElementNumber} | index: ${minElementIndex}\n
    3) Max number: ${maxElementNumber} | index: ${maxElementIndex}\n
    4) Total negative numbers: ${totalNegativeNumbers}\n
    5) Total odd positive numbers: ${totalOddPositiveNumbers}\n
    6) Total even positive numbers: ${totalEvenPositiveNumbers}\n
    7) Sum even positive numbers: ${sumEvenPositiveNumbers}\n
    8) Sum odd positive numbers: ${sumOddPositiveNumbers}\n
    9) Product positive numbers: ${productPositiveNumbers}\n
    10) Array: ${arr}\n
`);