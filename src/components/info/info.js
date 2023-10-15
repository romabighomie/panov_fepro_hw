import {carsData} from "../../api/api";

export async function setItemInfo() {
	const data = await carsData();
	const domElementInfo = document.getElementById('info');
	
	data.forEach(item => {
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
			infoBtn.textContent = 'Add';
			
			infoBtn.addEventListener("click", () => {
				// Добавление заказа в localstorage
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
				
				// Ресет кнопки категорий
				document.querySelectorAll('.category__item').forEach(item => {
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
				
				// Ресет блока лист с инфо
				document.querySelector('.main__list').classList.remove('has-info');
				
				// Вызов поп-ап добавления в корзину
				document.getElementById('added').classList.add('show');
				setTimeout(() => {
					document.getElementById('added').classList.remove('show');
				}, 2000);
				
				// Обновление страницы для localstorage инфы
				setTimeout(() => {
					location.reload();
				}, 2700);
			});
			
			infoItem.append(infoItemYear, infoItemColor, infoItemPrice);
			infoItemWrapper.append(infoItem, infoBtn);
			domElementInfo.append(infoItemWrapper);
		});
	});
}