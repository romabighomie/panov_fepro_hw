import {carsData} from "../../api/api";

export async function setListItem() {
	const data = await carsData();
	const domElementList = document.getElementById('list');
	
	data.forEach(item => {
		// Добавление обертки
			const listWrapper = document.createElement('div');
			listWrapper.classList.add('list__wrapper');
			listWrapper.id = item.id;
		
		item.models.forEach(model => {
			
			const modelItemName = model.model;
			const modelItemId = model.id;
			
			// Добавление элемента
			const itemElement = document.createElement('div');
			itemElement.classList.add('list__item');
			
			// Добавление заголовка
			const itemTitle = document.createElement('div');
			itemTitle.classList.add('list__item-title');
			itemTitle.textContent = modelItemName;
			
			// Добавление картинки
			const itemImg = document.createElement('img');
			itemImg.classList.add('list__item-img')
			itemImg.src = `img/${modelItemName}.webp`;
			itemImg.alt = `${modelItemName}`;
			
			// Добавление кнопки инфо
			const itemInfoBtn = document.createElement('div');
			itemInfoBtn.classList.add('list__item-info');
			itemInfoBtn.textContent = 'More info';
			
			itemInfoBtn.addEventListener("click", () => {
				// Смена класса active для кнопки
				domElementList.querySelectorAll('.list__item-info').forEach(item => {
					item.classList.remove('active');
				});
				itemInfoBtn.classList.add('active');
				
				document.querySelector('.main__list').classList.add('has-info');
				
				document.querySelectorAll('.info__item-wrapper').forEach(item => {
					item.classList.remove('show');
				});
				
				document.getElementById(modelItemId).classList.add('show');
			});
			
			itemElement.append(itemTitle);
			itemElement.append(itemImg);
			itemElement.append(itemInfoBtn);
			listWrapper.append(itemElement);
		});
		
		domElementList.append(listWrapper);
	});
}