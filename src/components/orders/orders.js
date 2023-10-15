export function myOrders() {
	let orders = document.getElementById('orders');
	
	let ordersWrapper = document.createElement('div');
	ordersWrapper.classList.add('orders__wrapper');
	
	// Local Storage
	let keys = Object.keys(localStorage);
	let filteredKeys = keys.filter(key => key.startsWith('orderTime_'));
	
	filteredKeys.forEach(key => {
		let orderDataString = localStorage.getItem(key);
		let orderDataObject = JSON.parse(orderDataString);
		
		// Лист айтем
		let ordersItem = document.createElement('div');
		ordersItem.classList.add('orders__item');
		
		// Кнопка удаления заказа
		let ordersItemBtnCancel = document.createElement('button');
		ordersItemBtnCancel.classList.add('orders__item-cancel');
		
		// Инока завершенного заказа
		let ordersItemIconDone = document.createElement('div');
		ordersItemIconDone.classList.add('orders__item-done');
		ordersItem.append(ordersItemIconDone);
		
		// Кнопка купить
		let ordersItemBtnBuy = document.createElement('button');
		ordersItemBtnBuy.textContent = 'Buy now'
		ordersItemBtnBuy.classList.add('orders__buy');
		// Атрибут заказа для кнопки купить
		ordersItemBtnBuy.setAttribute('data-order', orderDataObject.order);
		
		// Лист айтем со свернутым списком
		let ordersItemRowInfo = document.createElement('div');
		ordersItemRowInfo.classList.add('orders__item-row-info', 'hide');
		
		// Лист айтем ряд
		Object.keys(orderDataObject).forEach(key => {
			
			// Создание рядков для свернутого списка
			if(key !== 'order' && key !== 'time' && key !== 'price') {
				let ordersItemRow = document.createElement('div');
				ordersItemRow.classList.add('orders__item-row');
				
				switch (key) {
					case 'city':
						ordersItemRow.textContent = `Your city: ${orderDataObject[key]}`;
						break;
					
					case 'color':
						ordersItemRow.textContent = `Car color: ${orderDataObject[key]}`;
						break;
					
					case 'comments':
						ordersItemRow.textContent = `Comments: ${orderDataObject[key]}`;
						break;
					
					case 'model':
						ordersItemRow.textContent = `Car model: ${orderDataObject[key]}`;
						break;
					
					case 'name':
						ordersItemRow.textContent = `Car name: ${orderDataObject[key]}`;
						break;
					
					case 'payment':
						ordersItemRow.textContent = `Payment: ${orderDataObject[key]}`;
						break;
					
					case 'port':
						ordersItemRow.textContent = `Delivery: ${orderDataObject[key]}`;
						break;
					
					case 'quantity':
						ordersItemRow.textContent = `Quantity: ${orderDataObject[key]}`;
						break;
					
					case 'surname':
						ordersItemRow.textContent = `Your surname: ${orderDataObject[key]}`;
						break;
					
					case 'username':
						ordersItemRow.textContent = `Your Name: ${orderDataObject[key]}`;
						break;
					
					case 'year':
						ordersItemRow.textContent = `Year(car): ${orderDataObject[key]}`;
						break;
				}
				
				ordersItemRowInfo.append(ordersItemRow);
				ordersItem.append(ordersItemRowInfo);
			}
			
			// Создание рядков для начального отображения, только время и цена
			if(key === 'time' || key === 'price') {
				let ordersItemRow = document.createElement('div');
				ordersItemRow.classList.add('orders__item-row');
				
				switch (key) {
					case 'time':
						ordersItemRow.textContent = `Time: ${orderDataObject[key]}`;
						break;
						
					case 'price':
						ordersItemRow.textContent = `Price: ${orderDataObject[key]}`;
						break;
				}
				
				ordersItem.append(ordersItemRow);
			}
			
			// Заверешенная покупка
			if(key === 'username') {
				ordersItem.classList.add('done');
				ordersItemBtnBuy.classList.remove('show');
				ordersItemBtnCancel.classList.add('hide');
				ordersItemIconDone.classList.add('show');
			}
			
			// Развернуть скрытый список
			ordersItem.addEventListener('click', () => {
				ordersItemRowInfo.classList.remove('hide');
				ordersItem.style.cursor = 'initial';
				ordersItemBtnBuy.classList.add('show');
			});
			
			// Атрибут заказа для кнопки удалить
			ordersItemBtnCancel.setAttribute('data-order', orderDataObject.order);
			ordersItem.append(ordersItemBtnCancel);
		});
		
		// Удаление карточки по дата атрибуты из localstorage
		ordersItemBtnCancel.addEventListener('click', () => {
			let dataOrderValue = ordersItemBtnCancel.getAttribute('data-order');
			localStorage.removeItem(dataOrderValue);
			ordersItemBtnCancel.parentElement.classList.add('hide');
			
			if(!localStorage.length) {
				document.getElementById('cart').classList.remove('has-order');
			}
		});
		
		
		// Открытие формы заказа
		ordersItemBtnBuy.addEventListener('click', () => {
			document.querySelector('.overlay').classList.add('show');
			
			// Передача атрибута с заказам в форму
			const dataOrderValue = ordersItemBtnBuy.getAttribute('data-order');
			document.getElementById('form').setAttribute('data-order', dataOrderValue);
		});
		
		// Append элементов
		ordersItem.append(ordersItemBtnBuy);
		ordersWrapper.append(ordersItem);
		orders.append(ordersWrapper);
	});
}