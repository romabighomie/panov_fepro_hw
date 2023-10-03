function arithmeticMean() {
	let count = 0;
	let numbers = 3;
	
	for(let i = 1; i <= numbers; i++) {
		let number = +prompt(`Enter number ${i}`);
		count += number;
	}
	
	alert(`arithmetic mean: ${Math.floor(count / numbers)}`);
	
}

arithmeticMean();