class Student {
	constructor(name, surname, yearOfBirth, grades = []) {
		this.name = name;
		this.surname = surname;
		this.yearOfBirth = yearOfBirth;
		this.grades = grades;
	}
	
	attendance = new Array(25);
	
	isAge() {
		let currentDate = new Date();
		let birthDate = new Date(this.yearOfBirth);
		let age = currentDate.getFullYear() - birthDate.getFullYear();
		let birthMonth = birthDate.getMonth();
		let currentMonth = currentDate.getMonth();
		
		if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())) {
			age--;
		}
		
		return age;
	}
	
	averageScore() {
		let totalAverageScore = this.grades.reduce((accumulator, currentValue) => {
			return accumulator + currentValue;
		}, 0) / this.grades.length;
		
		return parseFloat(totalAverageScore.toFixed(1));
	}
	
	present() {
		const emptyIndex = this.attendance.findIndex(element => element === undefined);
		if (emptyIndex !== -1) {
			this.attendance[emptyIndex] = true;
		}
	}
	
	absent() {
		const emptyIndex = this.attendance.findIndex(element => element === undefined);
		if (emptyIndex !== -1) {
			this.attendance[emptyIndex] = false;
		}
	}
	
	summary() {
		let present = 0;
		
		for(let i = 0; i < this.attendance.length; i++) {
			if(this.attendance[i] === true) {
				present++;
			}
		}
		
		let totalAttendance = present / this.attendance.length;
		totalAttendance= parseFloat(totalAttendance.toFixed(1));
		
		if(totalAttendance > 0.9 && this.averageScore() > 90) {
			console.log('Good');
		} else {
			if(totalAttendance > 0.9 || this.averageScore() > 90) {
				console.log('Need improvement');
			} else {
				console.log('Bad');
			}
		}
	}
}

// Student 1
const studentOne = new Student('Student_1', 'Student_1', '01/01/2000', [100, 100, 90]);

console.log(studentOne);
console.log(`${studentOne.isAge()} y.o`);
console.log(`Average score ${studentOne.averageScore()}`);

for (let i = 0; i < 26; i++) {
	studentOne.present();
}

studentOne.summary();

// Student 2
const studentTwo = new Student('Student_2', 'Student_2', '01/01/1999', [95, 100, 90]);

console.log(studentTwo);
console.log(`${studentTwo.isAge()} y.o`);
console.log(`Average score ${studentTwo.averageScore()}`);

for (let i = 0; i < 22; i++) {
	studentTwo.present();
}

for (let i = 0; i < 26; i++) {
	studentTwo.absent();
}

studentTwo.summary();

// Student 3
const studentThree = new Student('Student_3', 'Student_3', '01/01/1979', [40, 40, 90]);

console.log(studentThree);
console.log(`${studentThree.isAge()} y.o`);
console.log(`Average score ${studentThree.averageScore()}`);

for (let i = 0; i < 100; i++) {
	studentThree.absent();
}

studentThree.summary();