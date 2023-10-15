export function postUserOrder() {
	
	const domElementForm = document.getElementById('form');
	
	domElementForm.addEventListener('submit', (event) => {
		event.preventDefault();
		
		// Получение атрибута с номером заказа
		const orderNumber = domElementForm.getAttribute('data-order');
	
		const username = document.getElementById("username").value;
		const surname = document.getElementById("surname").value;
		const city = document.getElementById("city").value;
		const port = document.getElementById("port").value;
		const quantity = document.getElementById("quantity").value;
		const payment = document.querySelector('input[name="payment"]:checked').id;
		const comments = document.getElementById("comments").value;
		
		// Добавление информации в обькт с заказом
		const userOrderData = JSON.parse(localStorage.getItem(orderNumber));
		
		// Умножение цены на количество в заказе
		if(quantity > 1) {
			const price = userOrderData.price.replace("€", "");
			const priceNumber = parseInt(price, 10);
			const quantityPrice = priceNumber * quantity;
			userOrderData.price = quantityPrice.toLocaleString('en-US', {style: 'currency', currency: 'EUR'});
		}
		
		userOrderData.username = username;
		userOrderData.surname = surname;
		userOrderData.city = city;
		userOrderData.port = port;
		userOrderData.quantity = quantity;
		userOrderData.payment = payment;
		userOrderData.comments = comments;
		
		localStorage.setItem(orderNumber, JSON.stringify(userOrderData));
		
		// Убираем форму, показываем алерт
		document.querySelector(`button[data-order="${orderNumber}"]`).parentElement.classList.add('success');
		document.getElementById('success').classList.add('show');
		document.querySelector('.overlay').classList.remove('show');
		setTimeout(() => {
			document.getElementById('success').classList.remove('show');
		}, 2000);
		
		// Обновление страницы для localstorage инфы
		setTimeout(() => {
			location.reload();
		}, 2700);
	});
}