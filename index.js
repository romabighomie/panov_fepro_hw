class Human {
	constructor(name, gender) {
		this.name = name;
		this.gender = gender;
	}
}

class Flat {
	residents = [];
	
	addHuman(human) {
		this.residents.push(human);
	}
}

class House {
	flats = [];
	
	constructor(maxFlats) {
		this.maxFlats = maxFlats;
	}
	
	addFlat(flat) {
		if(this.flats.length < this.maxFlats) {
			this.flats.push(flat);
		} else {
			console.log(`Building full, max flats is ${this.maxFlats}`);
		}
	}
}

const human1 = new Human('Human_1', 'Male');
const human2 = new Human('Human_2', 'Female');

const flat1 = new Flat();
const flat2 = new Flat();

const house1 = new House(1);

flat1.addHuman(human1);
flat2.addHuman(human2);

house1.addFlat(flat1);
house1.addFlat(flat2);

console.log(house1);