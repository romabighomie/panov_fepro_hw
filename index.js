// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// //Результат: [1, 2, 3, 4, 6, 7]

const array = [1, 2, 3, 4, 5, 6, 7];
let arrIndex = +prompt('Enter element number in the array [1, 2, 3, 4, 5, 6, 7]', '');

function removeElement(array, index) {
    index = index - 1; // В задаче указан элемент номер 5 (но по индексу это 4), по-этому уменьшаю индекс на 1

    if(index < 0 || index >= array.length) {
        return console.log('Error. Wrong number');
    }

    return array.splice(index, 1);
}

removeElement(array, arrIndex);

console.log(array);