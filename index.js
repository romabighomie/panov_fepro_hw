class Burger {
	
	static SIZE =  {
		SMALL: {
			size: 'small',
			price: 50,
			calories: 20
		},
		
		BIG: {
			size: 'big',
			price: 100,
			calories: 40
		}

	};

	static STUFFINGS = {
		CHEESE: {
			name: 'cheese',
			price: 10,
			calories: 20
		},
		
		SALAD: {
			name: 'salad',
			price: 20,
			calories: 5
		},
		
		POTATO: {
			name: 'potato',
			price: 15,
			calories: 10
		}
	};
	
	static TOPPINGS = {
		SAUCE: {
			name: 'sauce',
			price: 15,
			calories: 0
		},
		
		MAYO: {
			name: 'mayo',
			price: 20,
			calories: 5
		}
	};
	
	constructor(type, stuffing) {
		this.typeSize = type.size;
		this.typePrice = type.price;
		this.typeCalories = type.calories;
		
		this.stuffingName = stuffing.name;
		this.stuffingPrice = stuffing.price;
		this.stuffingCalories = stuffing.calories;
		
		this.toppings = [];
	}
	
	addTopping(topping) {
		this.toppings.push(topping);
	}
	
	calculatePrice() {
		const toppingsTotalPrice = this.toppings.reduce((accumulator, currentValue) => {
			return accumulator + currentValue.price;
		}, 0);
		
		return this.typePrice + this.stuffingPrice + toppingsTotalPrice;
	}
	
	calculateCalories() {
		const toppingsTotalCalories = this.toppings.reduce((accumulator, currentValue) => {
			return accumulator + currentValue.calories;
		}, 0);
		
		return this.typeCalories + this.stuffingCalories + toppingsTotalCalories;
	}
}


/* TEST */
function burgerTest() {
	const smallCheeseBurger = new Burger(Burger.SIZE.SMALL, Burger.STUFFINGS.CHEESE);
	
	console.log(`
		Total price: ${smallCheeseBurger.calculatePrice()}
	  Food energy: ${smallCheeseBurger.calculateCalories()}
  `);
	
	smallCheeseBurger.addTopping(Burger.TOPPINGS.MAYO);
	
	console.log(`
		Total price: ${smallCheeseBurger.calculatePrice()}
	  Food energy: ${smallCheeseBurger.calculateCalories()}
  `);
	
	smallCheeseBurger.addTopping(Burger.TOPPINGS.SAUCE);
	
	console.log(`
		Total price: ${smallCheeseBurger.calculatePrice()}
	  Food energy: ${smallCheeseBurger.calculateCalories()}
  `);
}

burgerTest();