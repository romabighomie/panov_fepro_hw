// Root
let domElementRoot = document.getElementById('root');

// Слайдер
let domElementSlider = document.createElement('div');
domElementSlider.classList.add('slider');

// Контейнер для картинок
let domElementImgContainer = document.createElement('div');
domElementImgContainer.classList.add('slider__img-container');

// Кнопка prev
let domElementButtonPrev = document.createElement('button');
domElementButtonPrev.textContent = "Prev";
domElementButtonPrev.classList.add('slider__nav', 'slider__nav--left');

// Кнопка next
let domElementButtonNext = document.createElement('button');
domElementButtonNext.textContent = "Next";
domElementButtonNext.classList.add('slider__nav', 'slider__nav--right');

/* --- Создание картинок и добавление их в контейнер ---
Кол-во картинок которое будет в слайдере, передается числом в функции createSlider
*/
function createImg(items) {
	for (let i = 1; i <= items; i++) {
		let getRandomImg = Math.floor(Math.random() * 99) + 1;
		
		let elementImg = document.createElement('img');
		elementImg.classList.add('random-img');
		elementImg.src = `https://placehold.co/100x100?text=${getRandomImg}`;
		elementImg.alt = '';
		domElementImgContainer.append(elementImg);
	}
}

/* --- Обновление атрибута disabled для кнопок prev, next
Вызывается при первой инициализации слайдера и
при каждом переключение слайда
 --- */
function updateButtonsVisibility() {
	let current = document.querySelector('.random-img.show');
	domElementButtonPrev.disabled = !current.previousElementSibling;
	domElementButtonNext.disabled = !current.nextElementSibling;
}

/* --- Current Slide ---
Проверка на текущий слайд, чтобы определить какому элементу дальше,
давать класс show
true(next) или false(prev) передаются из ивентов на кнопки
*/
function switchSlide(forward) {
	let currentSlide = document.querySelector('.random-img.show');
	currentSlide.classList.remove('show');
	currentSlide = forward ? currentSlide.nextElementSibling : currentSlide.previousElementSibling;
	currentSlide.classList.add('show');
	
	updateButtonsVisibility();
}

/* --- Ивент кнопки next --- */
domElementButtonNext.addEventListener('click', () => {
	switchSlide(true);
});

/* --- Ивент кнопки prev --- */
domElementButtonPrev.addEventListener('click', () => {
	switchSlide(false);
});

/* --- Функция инициализации слайдера --- */
function createSlider() {
	createImg(5);
	
	domElementSlider.append(domElementImgContainer, domElementButtonPrev, domElementButtonNext);
	domElementRoot.append(domElementSlider);
	
	let current = document.querySelector('.random-img');
	current.classList.add('show');
	
	updateButtonsVisibility();
}

createSlider();