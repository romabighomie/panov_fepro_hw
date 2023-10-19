document.addEventListener('DOMContentLoaded', () => {
	const xhr = new XMLHttpRequest();
	const citySelect = document.getElementById("city");
	
	// Отправка запроса
	function sendRequest(method, url) {
		return new Promise((resolve, reject) => {
			xhr.open(method, url);
			xhr.responseType = 'json';
			
			xhr.onload = () => {
				if (xhr.status >= 400) {
					reject(xhr.response);
				} else {
					resolve(xhr.response);
				}
			}
			
			xhr.onerror = () => {
				reject(xhr.response);
			}
			
			xhr.send();
		});
	}
	
	// Отрисовка данных в DOM
	function print(data) {
		const temp = document.getElementById('temp');
		const pressure = document.getElementById('pressure');
		const description = document.getElementById('description');
		const humidity = document.getElementById('humidity');
		const speed = document.getElementById('speed');
		const deg = document.getElementById('deg');
		const icon = document.getElementById('icon');
		
		temp.textContent = `temp: ${data.main.temp}`;
		pressure.textContent = `pressure: ${data.main.pressure}`;
		description.textContent = `description: ${data.weather[0].description}`;
		humidity.textContent = `humidity: ${data.main.humidity}`;
		speed.textContent = `speed: ${data.wind.speed}`;
		deg.textContent = `deg: ${data.wind.deg}`;
		icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
	}
	
	// Обновление погоды для городов по селекту
	citySelect.addEventListener("change", () => {
		const selectedCity = citySelect.value;
		const newRequestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
		
		sendRequest('GET', newRequestUrl)
		.then(data => {
			print(data);
		})
		.catch(err => {
			console.error(err);
		});
	});
	
	citySelect.dispatchEvent(new Event('change'));
});
