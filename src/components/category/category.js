import {carsData} from "../../api/api";

export async function setCategory() {
	const data = await carsData();
	const domElementCategory = document.querySelector('#category');
	
	// Наполнение категориями
	data.forEach(item => {
		const name = item.name;
		const categoryItem = document.createElement('div');
		categoryItem.classList.add('category__item');
		categoryItem.textContent = name;
		domElementCategory.appendChild(categoryItem);
		
		// Евент клика для навигации по листу
		categoryItem.addEventListener("click", () => {
			const itemId = item.id;
			
			// Смена класса active для кнопки
			domElementCategory.querySelectorAll('.category__item').forEach(item => {
				item.classList.remove('active');
			});
			categoryItem.classList.add('active');
			
			// Смена класса show для листа
			data.forEach(item => {
				document.getElementById(item.id).classList.remove('show');
				
				// Ресет кнопки в карточке More info
				document.querySelectorAll('.list__item-info').forEach(item => {
					item.classList.remove('active');
				});
				
				// Ресет блока инфо
				document.querySelectorAll('.info__item-wrapper').forEach(item => {
					item.classList.remove('show');
				});
				
				// Ресет блока лист с инфо
				document.querySelector('.main__list').classList.remove('has-info');
				
				// Ресет блока заказы
				document.querySelector('.orders').classList.remove('show');
			});
			
			document.getElementById(itemId).classList.add('show');
			
		});
		
	});
}