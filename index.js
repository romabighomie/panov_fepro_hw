class Human {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	
	infoAboutHuman() {
		console.log(`
			name: ${this.name}
			age: ${this.age}
		`);
	}
}

class Car {
	constructor(make, model, year, color) {
		this.make = make;
		this.model = model;
		this.year = year;
		this.color = color;
	}
	
	addNewOwner(owner) {
		if(owner.age > 18) {
			owner.infoAboutHuman();
			this.infoAboutCar();
		} else {
			console.log(`${owner.name} is young (less 18 y.o)`);
		}
	}
	
	infoAboutCar() {
		console.log(`
			make: ${this.make}
			model: ${this.model}
			year: ${this.year}
			color: ${this.color}
		`);
	}
}

const humanOne = new Human('Human_1', 17);
const humanTwo = new Human('Human_2', 26);

const carOne = new Car('Mercedes', 'GLC', '2021', 'white');
const carTwo = new Car('Mazda', 'CX-3', '2019', 'gray');

carOne.addNewOwner(humanTwo);
carTwo.addNewOwner(humanOne);