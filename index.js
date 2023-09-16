/* Task 1
Дано масив з елементами різних типів.
Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
*/

// let mixedArray = [1, 2, 5, 'a', 'b'];
//
// function calcOnlyNumbers (item) {
//     let sum = 0;
//     let count = 0;
//
//     for(let i = 0; i < item.length; i++) {
//         if(typeof item[i] === 'number') {
//             sum += item[i];
//             count++;
//         }
//     }
//
//     if(count === 0) {
//         return 0;
//     }
//
//     return (sum / count).toFixed(2);
// }
//
// console.log('Result task 1: ' + calcOnlyNumbers(mixedArray));

/* Task 2
Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
*/

// function doMath(x, z, y) {
//
//     if(typeof x !== 'number' || typeof y !== 'number') {
//         return 'Error not a number';
//     }
//
//     switch (z) {
//         case '+':
//             return x + y;
//
//         case '-':
//             return x - y;
//
//         case '*':
//             return x * y;
//
//         case '/':
//             if(y === 0) {
//                 return 'Error / 0';
//             }
//             return x / y;
//
//         case '%':
//             if(y === 0) {
//                 return 'Error / 0';
//             }
//             return x % y;
//
//         case '^':
//             return Math.pow(x, y);
//
//         default: return 'Error default';
//     }
//
// }
//
// let x = parseFloat(prompt('First number', ''));
// let z = prompt('Math (+, -, *, /, %, ^)', '');
// let y = parseFloat(prompt('Second number', ''));
//
// console.log('Result task 2: ' + doMath(x, z, y));

/* Task 3
Написати функцію заповнення даними користувача двомірного масиву.
Довжину основного масиву і внутрішніх масивів задає користувач.
Значення всіх елементів всіх масивів задає користувач.
*/

// function newArray() {
//     let rows = parseInt(prompt('Rows:'));
//     let columns = parseInt(prompt('Columns:'));
//
//     if (isNaN(rows) || isNaN(columns)) {
//         console.log('Error');
//         return;
//     }
//
//     let mainArr = [];
//
//     for (let i = 0; i < rows; i++) {
//         const innerArray = [];
//
//         for (let j = 0; j < columns; j++) {
//             let value = prompt(`sub arr: [${i} / ${rows}]\nitems: [${j} / ${columns}]`);
//             innerArray.push(value);
//         }
//
//         mainArr.push(innerArray);
//     }
//
//     return mainArr;
// }
//
// console.log(newArray());

/* Task 4
Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
Вихідний рядок та символи для видалення задає користувач.
*/

// function removeCharsFromString(inputString, charsToRemove) {
//     let regex = new RegExp(`[${charsToRemove.join('')}]`, 'g');
//     let resultString = inputString.replace(regex, '');
//
//     return resultString;
// }
//
// let inputString = prompt('Enter text');
// let charsToRemoveInput = prompt('Enter symbols to remove. Example (ld)');
// let charsToRemove = charsToRemoveInput.split('');
//
// console.log(removeCharsFromString(inputString, charsToRemove));











