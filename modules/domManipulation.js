// Добавление класса
export function addClassToElement(element, className) {
	element.classList.add(className);
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
			const modelItem = model.model = document.createElement('div');
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
			
			infoBtn.addEventListener('click', () => {
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
		
		// Ресет поп-ап
		document.querySelector('.popup').classList.remove('show');
	});
	
	appendElements(element, popupText, popupBtn);
}