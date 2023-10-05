/* Task 1
Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
*/
for (let i = 20; i <= 30; i += 0.5) {
	if (i % 1 === 0) {
		console.log(i);
	} else {
		console.log(+i.toFixed(1));
	}
}

/* Task 2
Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
*/
for(let i = 10; i <= 100; i+= 10) {
	let amount = 27;
	console.log(`${i}$ = ${amount * i}₴`);
}

/* Task 3
Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
*/
for(let i = 1; i <= 100; i++) {
	let number = 25;
	
	if(Math.pow(i, 2) <= number) {
		console.log(i);
	}
}

/* Task 4
Дане ціле число. З'ясувати, чи є воно простим
(простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
*/
function isSimpleNumber(number) {
	if(number < 2) {
		return false;
	}
	
	for (let i = 2; i <= Math.sqrt(number); i++) {
		if (number % i === 0) {
			return false;
		}
	}
	
	return true;
}

console.log(isSimpleNumber(1));

/* Task 5
Дане деяке число.
Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.
(Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
*/
function PowerOfThree(number) {
	let stage = 1;
	
	while (Math.pow(3, stage) <= number) {
		if (Math.pow(3, stage) === number) {
			return true;
		}
		stage++;
	}
	
	return false;
}

console.log(PowerOfThree(81));