import {domElementList, domElementMenu} from "./vars.js";

// Добавление класса
export function addClassToElement(element, ...className) {
	element.classList.add(...className);
}

// Добавление нового элемента
export function appendElements(parentElement, ...childElements) {
	childElements.forEach(child => {
		parentElement.append(child);
	});
}

// Добавление текста
export function setTextContent(element, text) {
	element.textContent = text;
}

// Добавление элементов в меню категории
export function setMenuCategory(element, carsData) {
	//Категория меню мои заказы
	let myOrdersCategory = document.createElement('div');
	addClassToElement(myOrdersCategory, 'menu__item', 'menu__item--orders');
	setTextContent(myOrdersCategory, 'My orders');
	appendElements(domElementMenu, myOrdersCategory);
	myOrders();
	
	// Категории из обьекта
	carsData.forEach(item => {
		const name = item.name;
		const menuItem = document.createElement('div');
		
		menuItem.classList.add('menu__item');
		menuItem.textContent = name;
		
		// Евент клика для навигации по листу
		menuItem.addEventListener("click", () => {
			const itemId = item.id;
			
			// Смена класса active для кнопки
			element.querySelectorAll('.menu__item').forEach(item => {
				item.classList.remove('active');
			});
			menuItem.classList.add('active');
			
			// Смена класса show для листа orders
			document.getElementById('orders').classList.remove('show');
			
			// Смена класса show для листа
			carsData.forEach(item => {
				document.getElementById(item.id).classList.remove('show');
				
				// Ресет кнопки в карточке More info
				document.querySelectorAll('.list__item-info').forEach(item => {
					item.classList.remove('active');
				});
				
				// Ресет блока инфо
				document.querySelectorAll('.info__item-wrapper').forEach(item => {
					item.classList.remove('show');
				});
			});
			document.getElementById(itemId).classList.add('show');
		});
		
		element.appendChild(menuItem);
	});
}

// Добавление элементов в лист
export function setListItem(element, carsData) {
	
	carsData.forEach(item => {
		// Добавление обертки c уникальным id
		const modelItemWrapper = document.createElement('div');
		modelItemWrapper.classList.add('list__wrapper');
		modelItemWrapper.id = item.id;
		
		item.models.forEach(model => {
			
			const modelItemName = model.model;
			const modelItemId = model.id;
			
			// Добавление элемента
			const modelItem = document.createElement('div');
			modelItem.classList.add('list__item');
			
			// Добавление заголовка
			const modelItemHeader = document.createElement('div');
			modelItemHeader.classList.add('list__item-header');
			modelItemHeader.textContent = modelItemName;
			
			// Добавление картинки
			const modelItemImage = document.createElement('img');
			modelItemImage.classList.add('list__item-img')
			modelItemImage.src = `../images/${modelItemName}.webp`;
			modelItemImage.alt = `${modelItemName}`;
			
			// Добавление кнопки инфо
			const modelItemButton = document.createElement('div');
			modelItemButton.classList.add('list__item-info');
			modelItemButton.textContent = 'More info';
			
			modelItemButton.addEventListener("click", () => {
				// Смена класса active для кнопки
				element.querySelectorAll('.list__item-info').forEach(item => {
					item.classList.remove('active');
				});
				modelItemButton.classList.add('active');
				
				document.querySelectorAll('.info__item-wrapper').forEach(item => {
					item.classList.remove('show');
				});
				
				document.getElementById(modelItemId).classList.add('show');
			});
			
			appendElements(modelItemWrapper, modelItem);
			appendElements(modelItem, modelItemHeader, modelItemImage, modelItemButton);
			appendElements(element, modelItemWrapper);
		});
	});
}

// Добавление доп информации
export function setItemInfo(element, carsData) {
	carsData.forEach(item => {
		item.models.forEach(itemModel => {
			
			// Добавление элемента
			const infoItem = document.createElement('div');
			infoItem.classList.add('info__item');
			
			// Добавление Обертки
			const infoItemWrapper = document.createElement('div');
			infoItemWrapper.id = itemModel.id;
			infoItemWrapper.classList.add('info__item-wrapper');
			
			// Добавление года
			const infoItemYear = document.createElement('div');
			infoItemYear.classList.add('info__item-text');
			infoItemYear.textContent = `Year: ${itemModel.info.year}`;
			
			// Добавление цвета
			const infoItemColor = document.createElement('div');
			infoItemColor.classList.add('info__item-text');
			infoItemColor.textContent = `Color: ${itemModel.info.color}`;
			
			// Добавление цены
			const infoItemPrice = document.createElement('div');
			infoItemPrice.classList.add('info__item-text');
			infoItemPrice.textContent = `Price: ${itemModel.info.price}`;
			
			// Добавление кнопки
			const infoBtn = document.createElement('div');
			infoBtn.classList.add('info__btn');
			infoBtn.textContent = 'Buy now';
			
			// Вызов поп-апа и добавление инфы в local storage
			infoBtn.addEventListener('click', () => {
				let currentTime = new Date().toLocaleTimeString();
				
				let orderData = {
					order: `orderTime_${currentTime}`,
					name: item.name,
					model: itemModel.model,
					year: itemModel.info.year,
					color: itemModel.info.color,
					price: itemModel.info.price,
					time: currentTime,
				};
				localStorage.setItem(`orderTime_${currentTime}`, JSON.stringify(orderData));
				
				document.querySelector('.popup').classList.add('show');
			});
			
			appendElements(infoItemWrapper, infoItem, infoBtn);
			appendElements(infoItem, infoItemYear, infoItemColor, infoItemPrice);
			appendElements(element, infoItemWrapper);
		});
	});
}

export function setPopup(element) {
	const popupText = document.createElement('div');
	popupText.textContent = 'Congratulations';
	
	const popupBtn = document.createElement('div');
	popupBtn.classList.add('popup__btn');
	popupBtn.textContent = 'Close';
	
	popupBtn.addEventListener("click", () => {
		resetClasses()
		
		// Ресет поп-ап
		document.querySelector('.popup').classList.remove('show');
		location.reload();
	});
	
	appendElements(element, popupText, popupBtn);
}

export function myOrders() {
	// Кнопка мои заказы
	let orderBtn = document.querySelector('.menu__item--orders');
	
	// Обертка листа
	let listWrapper = document.createElement('div');
	listWrapper.id = 'orders';
	addClassToElement(listWrapper, 'list__wrapper', 'list__wrapper--orders');
	
	// Local Storage
	let keys = Object.keys(localStorage);
	let filteredKeys = keys.filter(key => key.startsWith('orderTime_'));
	
	filteredKeys.forEach(key => {
		let orderDataString = localStorage.getItem(key);
		let orderDataObject = JSON.parse(orderDataString);
		
		// Лист айтем
		let listItem = document.createElement('div');
		addClassToElement(listItem, 'list__item', 'list__item--order');
		
		// Кнопка удаления заказа
		let listItemBtnCancel = document.createElement('button');
		setTextContent(listItemBtnCancel, 'Remove from my order');
		addClassToElement(listItemBtnCancel, 'list__item-cancel');
		
		// Лист айтем со свернутым списком
		let listItemRowInfo = document.createElement('div');
		addClassToElement(listItemRowInfo, 'list__item-row-info', 'hide');
		
		// Лист айтем ряд
		Object.keys(orderDataObject).forEach(key => {
			
			// Создание рядков для свернутого списка
			if(key !== 'order' && key !== 'time' && key !== 'price') {
				let listItemRow = document.createElement('div');
				setTextContent(listItemRow, orderDataObject[key]);
				addClassToElement(listItemRow, 'list__item-row');
				
				appendElements(listItemRowInfo, listItemRow);
				appendElements(listItem, listItemRowInfo);
			}
			
			// Создание рядков для начального отображения, только время и цена
			if(key === 'time' || key === 'price') {
				let listItemRow = document.createElement('div');
				setTextContent(listItemRow, orderDataObject[key]);
				addClassToElement(listItemRow, 'list__item-row');
				appendElements(listItem, listItemRow);
			}
			
			listItem.addEventListener('click', () => {
				listItemRowInfo.classList.remove('hide');
			});
			
			listItemBtnCancel.setAttribute('data-order', orderDataObject.order);
		});
		
		// Удаление карточки по дата атрибуты из localstorage
		listItemBtnCancel.addEventListener('click', () => {
			let dataOrderValue = listItemBtnCancel.getAttribute('data-order');
			localStorage.removeItem(dataOrderValue);
			listItemBtnCancel.parentElement.classList.add('hide');
		});
		
		appendElements(listItem, listItemBtnCancel);
		appendElements(listWrapper, listItem);
	});
	
	appendElements(domElementList, listWrapper);
	
	// Открытие моих заказов
	orderBtn.addEventListener('click', () => {
		resetClasses();
		addClassToElement(listWrapper, 'show');
	});
}

function resetClasses() {
	// Ресет кнопки категорий
	document.querySelectorAll('.menu__item').forEach(item => {
		item.classList.remove('active');
	});
	
	// Ресет листа
	document.querySelectorAll('.list__wrapper').forEach(item => {
		item.classList.remove('show');
	});
	
	// Ресет инфо
	document.querySelectorAll('.info__item-wrapper').forEach(item => {
		item.classList.remove('show');
	});
}