// ! Для наглядности можно раскоментить некоторые консоль логи


const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// for(let i = 0; i < characters.length; i++) {
//     console.log(`[num: ${i}] [res: ${characters[i]}]`);
// }
//
// console.log('----------------------------------------------')

function generateKey(count, characters) {
    let key = '';

    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        for(let i = 0; i < count; i++) {
            let randomNumber = Math.floor(Math.random() * (max - min) + min);
            key += characters[randomNumber];

            // console.log(`[num: ${randomNumber}] [res: ${characters[randomNumber]}] / [full: ${key}]`);
        }
    }

    getRandomNumber(0, characters.length);

    return key;
}

const key = generateKey(10, characters);

// console.log('----------------------------------------------');
console.log(`Full result: ${key}`);