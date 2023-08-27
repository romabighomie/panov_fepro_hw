/*
Створити масив, довжину та елементи якого задає користувач.
Відсортувати масив за зростанням.
Видалити елементи з масиву з 2 по 4 (включно!).
У міру змін виводити вміст масиву на сторінку.
*/

let arrLength = +prompt('Enter array length', '');
let arr = [];

for(let i = 0; i < arrLength; i++) {
    let arrItem = prompt('Enter array item', '');
    arr.push(arrItem);
}

console.log(`Default array: ${arr}`);
console.log(`Array sort ${arr.sort((a, b) => a - b)}`);

arr.splice(1,3)

console.log(`After removing items: ${arr}`);