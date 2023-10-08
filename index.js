let linkElements = document.getElementsByClassName('link');

Array.from(linkElements).forEach((item) => {
	item.addEventListener('click', (event) => {
		event.preventDefault();
		let href = item.getAttribute('href');
		
		if (!/^https?:\/\//i.test(href)) {
			href = 'https://' + href;
		}
		
		window.open(href, '_blank');
	});
});