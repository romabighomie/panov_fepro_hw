//Create smileys data
const smileys = [
	{
		smile: "😆",
		voteCount: 0,
	},
	{
		smile: "😅",
		voteCount: 0,
	},
	{
		smile: "😃",
		voteCount: 0,
	},
	{
		smile: "😈",
		voteCount: 0,
	},
	{
		smile: "😉",
		voteCount: 0,
	},
];

//Get smile && vote containers
let smileContainer = document.querySelector('#smile-container');
let voteContainer = document.querySelector('#vote-container');

//Update vote scores
function updateVotes() {
	voteContainer.innerHTML = "";
	
	smileys.forEach((item) => {
		let voteElement = document.createElement('div');
		voteElement.classList.add('vote-score');
		voteElement.textContent = item.voteCount;
		
		voteContainer.appendChild(voteElement);
	})
}

//Show smileys elements
function showSmiles() {
	smileys.forEach((item, index) => {
		let smileElement = document.createElement('div');
		smileElement.classList.add('smile');
		smileElement.textContent = item.smile;
		
		smileElement.addEventListener('click', () => {
			smileys[index].voteCount++;
			updateVotes();
		})
		
		smileContainer.appendChild(smileElement);
	})
}

// Add new smiles
document.getElementById('add').addEventListener('click', () => {
	let newSmile = prompt('Add new smile', '😈');
	
	if(newSmile !== null) {
		newSmile = {
			smile: newSmile,
			voteCount: 0
		};
		
		smileys.push(newSmile);
		smileContainer.innerHTML = '';
		showSmiles();
		updateVotes();
	}

});

// Remove smiles
document.getElementById('remove').addEventListener('click', () => {
	let removeSmile = +prompt('Enter number of smile to remove');
	
	if(removeSmile > 0) {
		removeSmile = removeSmile - 1;
		smileys.splice(removeSmile, 1);
		smileContainer.innerHTML = '';
		showSmiles();
		updateVotes();
	}
});

//Initialization
showSmiles();
updateVotes();
