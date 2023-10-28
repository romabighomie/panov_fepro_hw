class SuperMath {
	
	check(obj) {
		const {x, y, z} = obj;
		const mathOperations = ['+', '-', '/', '*', '%'];
		
		if(y === 0 && z === '/') {
			alert('Cant divide by 0. Invalid operator /');
			this.input();
		}
		
		if(x || y !== Number) {
			alert('x or y Not a number');
			this.input();
		}
		
		if(mathOperations.includes(z)) {
			const confirmMessage = `Do you want to perform the operation ${z} with ${x} and ${y}? (y/n)`;
			const userChoice = prompt(confirmMessage);
			
			if(userChoice === 'y') {
				const result = this.performOperation(x, y, z);
				alert(`Result: ${result}`);
			} else {
				this.input();
			}
		} else {
			alert('Invalid operator. Please provide a valid operator: +, -, /, *, %');
			this.input();
		}
	}
	
	input() {
		const x = parseFloat(prompt('Enter the value for X:'));
		const y = parseFloat(prompt('Enter the value for Y:'));
		const z = prompt('Enter the operator (+, -, /, *, %):');
		
		this.check({ x, y, z });
	}
	
	performOperation(x, y, z) {
		switch (z) {
			case '+':
				return x + y;
			case '-':
				return x - y;
			case '/':
				return x / y;
			case '*':
				return x * y;
			case '%':
				return x % y;
			default:
				return 'Invalid operator';
		}
	}
}

const obj = { x: 12, y: 0, z: "/" };
const exmpl = new SuperMath();
exmpl.check(obj);