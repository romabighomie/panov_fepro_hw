let domElementRoot = document.getElementById('root');

for(let i = 1; i <= 100; i++) {
	let domElementColumn = document.createElement('div');
	domElementColumn.textContent = i.toString();
	domElementRoot.append(domElementColumn);
}