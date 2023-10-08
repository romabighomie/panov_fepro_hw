let domElementRoot = document.getElementById('root');
let domElementList = document.createElement('ul');

let arrNumbers = [1, 2, 3, [1, 2, 3], 4, 5, 6, [1, 2, 3]];
let currentNumberOfArray = 0;

for(let i = 0; i < arrNumbers.length; i++) {
	let parentItem = document.createElement('li');

	if(Array.isArray(arrNumbers[i])) {
		currentNumberOfArray += 1;

		for(let j = 0; j < arrNumbers[i].length; j++) {
			let list = document.createElement('ul');
			let item = document.createElement('li');
			item.textContent = `${currentNumberOfArray}.${arrNumbers[i][j]}`;
			
			list.append(item);
			parentItem.append(list);
			domElementList.append(parentItem);
		}

	} else {
		parentItem.textContent = arrNumbers[i].toString();
		domElementList.append(parentItem);
	}

}

domElementRoot.append(domElementList);
