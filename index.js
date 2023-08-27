/* ----- TASK 1 -----
Вивести на сторінку в один рядок через кому числа від 10 до 20.
*/
// let counter = '';
//
// for(let i = 10; i <= 20; i ++) {
//     if(i < 20) {
//         counter += i + ', ';
//     } else {
//         counter += i;
//     }
// }
//
// console.log(counter);

/* ----- TASK 2 -----
Вивести квадрати чисел від 10 до 20.
*/

// let number = 10;
//
// do {
//     console.log(`${number} : ${Math.pow(number, 2)}`);
//     number++;
// } while (number <= 20);

/* ----- TASK 3 -----
Вивести таблицю множення на 7.
*/
// let number = 7;
// let factor = 1;
//
// while (factor <= 9) {
//     console.log(`${number} * ${factor} = ${number * factor}`);
//     factor ++;
// }

/* ----- TASK 4 -----
Знайти суму всіх цілих чисел від 1 до 15.
*/
// let counter = 0;
//
// for(let i = 1; i <= 15; i++) {
//     counter += i;
// }
//
// console.log(counter);

/* ----- TASK 5 -----
Знайти добуток усіх цілих чисел від 15 до 35.
*/
// let counter = 1;
//
// for(let i = 15; i <= 35; i ++) {
//     counter *= i;
// }
//
// console.log(counter);

/* ----- TASK 6 -----
Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
*/
// let counter = 0;
// let total = 500;
//
// for(let i = 1; i <= total; i++) {
//     counter += i;
// }
//
// console.log(counter / total);

/* ----- TASK 7 -----
Вивести суму лише парних чисел в діапазоні від 30 до 80.
*/
// let counter = 0;
//
// for(let i = 30; i <= 80; i++) {
//     if(i % 2 === 0) {
//         counter += i;
//     }
// }
//
// console.log(counter);

/* ----- TASK 8 -----
Вивести всі числа в діапазоні від 100 до 200 кратні 3.
*/

// for(let i = 100; i <= 200; i++) {
//     if(i % 3 === 0) {
//         console.log(i);
//     }
// }

/* ----- TASK 9 -----
Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
*/

// let number = +prompt('Enter a natural number', 1);
//
// // Проверка на натурально число (должно быть больше 0 и не дробное)
// if(number > 0 && Number.isInteger(number)) {
//     for(let i = 0; i <= number; i++) {
//         if(number % i === 0) {
//             console.log(`${number} : divider ${i}`)
//         }
//     }
// } else {
//     console.log(`${number} isnt a natural number`)
// }

/* ----- TASK 10 -----
Визначити кількість його парних дільників.
*/

// let number = +prompt('Enter a natural number', 1);
// let counter = 0;
//
// if(number > 0 && Number.isInteger(number)) {
//     for(let i = 0; i <= number; i++) {
//         if(number % i === 0 && i % 2 === 0) {
//             counter++;
//         }
//     }
// } else {
//     console.log(`${number} isnt a natural number`)
// }
//
// console.log(`Total of dividers: ${counter}`)

/* ----- TASK 11 -----
Знайти суму його парних дільників.
*/

// let number = +prompt('Enter a natural number', 1);
// let counter = 0;
//
// if(number > 0 && Number.isInteger(number)) {
//     for(let i = 0; i <= number; i++) {
//         if(number % i === 0 && i % 2 === 0) {
//             counter += i;
//         }
//     }
// } else {
//     console.log(`${number} isnt a natural number`)
// }
//
// console.log(`Sum of dividers: ${counter}`)

/* ----- TASK 12 -----
Надрукувати повну таблицю множення від 1 до 10.
*/
//
// for(let i = 1; i <= 9; i++) {
//     console.log(`----- ${i} -----`);
//     for(let j = 1; j <= 9; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }