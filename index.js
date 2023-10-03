let hours = +prompt('Enter the time', '');

if(hours > 0 && hours != null) {
	let timeToSecond = hours * 60 * 60;
	alert(`${timeToSecond} seconds`);
}