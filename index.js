let root = document.getElementById('root');
let elementImg = document.createElement('img');
let getRandomImg = Math.floor(Math.random() * 9) + 1;

elementImg.classList.add('random-img')
elementImg.src = `https://placehold.co/100x100?text=${getRandomImg}`;
elementImg.alt = `${getRandomImg}`;

root.append(elementImg);