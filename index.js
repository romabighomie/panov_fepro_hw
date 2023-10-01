const domElementForm = document.getElementById('form');
const domElementResult = document.getElementById('result');
domElementResult.classList.add('hide');

document.getElementById("form").addEventListener("submit", function(event) {
	event.preventDefault();
	
	const username = document.getElementById("username").value;
	const surname = document.getElementById("surname").value;
	const gender = document.querySelector('input[name="gender"]:checked').value;
	const city = document.getElementById("city").value;
	const address = document.getElementById("address").value;
	
	const languages = [];
	const langCheckboxes = document.querySelectorAll('input[name="lang"]:checked');
	langCheckboxes.forEach(function(checkbox) {
		languages.push(checkbox.id);
	});
	
	const userData = {
		username: username,
		surname: surname,
		gender: gender,
		city: city,
		address: address,
		languages: languages
	};
	
	for(let key in userData) {
		let item = document.createElement('div');
		item.classList.add('form__row')
		item.textContent = `${key}: ${userData[key]}`;
		domElementResult.append(item);
	}
	
	domElementResult.classList.remove('hide');
	domElementForm.classList.add('hide');
});