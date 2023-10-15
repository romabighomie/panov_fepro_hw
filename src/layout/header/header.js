function resetFewElements() {
	// Ресет кнопки категорий
	let categoryItem = document.querySelector('.category__item.active');
	if(categoryItem) {
		categoryItem.classList.remove('active');
	}
	
	// Ресет листа
	let listWrapper = document.querySelector('.list__wrapper.show');
	if(listWrapper) {
		listWrapper.classList.remove('show');
	}
	
	// Ресет инфо
	let infoItemWrapper = document.querySelector('.info__item-wrapper.show');
	if(infoItemWrapper) {
		infoItemWrapper.classList.remove('show');
	}
}

export function showListOrders() {
	// Открытие моих заказов
	let orderBtnOpen = document.querySelector('.header__orders');
	
	orderBtnOpen.addEventListener('click', () => {
		document.querySelector('#orders').classList.add('show');
		
		resetFewElements();

	});
}

export function logoResetGoToHome() {
	document.querySelector('.header__logo').addEventListener('click', () => {
		
		resetFewElements();
		
		// Ресет листа заказов
		let orders = document.querySelector('#orders');
		if(orders) {
			orders.classList.remove('show');
		}
	});
}

export function cartHasOrder() {
	if (localStorage.length > 0) {
		document.getElementById('cart').classList.add('has-order');
	}
}