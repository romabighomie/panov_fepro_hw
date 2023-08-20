let userBirth = Number(prompt('Enter your year of birth', '1997'));
let userTown =  prompt('Enter the name of the city where you live', 'Kyiv');
let userFavoriteSport = prompt('Enter your favorite sport', 'football');

// Присвоение текущего года
let currentDate =  new Date();
let currentYear =  currentDate.getFullYear();

// Проверка и калькуляция возраста юзера в переменной
let userAge
    = userBirth > 0 && userBirth < currentYear
    ? currentYear - userBirth
    : userBirth === currentYear
    ? 'Just born :))'
    : 'Ooops... Incorrect age';

// Проверка ввел ли пользователь возраст
Boolean(userBirth) === false ? userAge = 'You didnt want to enter your age' : userAge = `Your age is ${userAge}`;

// Проверка ввел ли пользователь город
if(Boolean(userTown) === false) {
    userTown = 'You didnt want to enter your town';

} else if(userTown === 'Kyiv' || userTown === 'London' || userTown === 'Washington') {
    userTown = `You live in the capital ${userTown}`

} else {
    userTown = `You live in ${userTown}`
}

// Проверка ввел ли пользователь вид спорта
if(Boolean(userFavoriteSport) === false) {
    userFavoriteSport = 'You didnt want to enter your favorite sport';

} else if(userFavoriteSport === 'football' || userFavoriteSport === 'swimming' || userFavoriteSport === 'basketball') {

    let sportChampion;

    switch (userFavoriteSport) {
        case 'football' :
            sportChampion = 'Johan Cruyff';
            break;

        case 'swimming' :
            sportChampion = 'Mark Spitz';
            break;

        case 'basketball' :
            sportChampion = 'Michael Jordan';
            break;
    }

    userFavoriteSport = `Cool, do you want to be like ${sportChampion} ?`;

} else {
    userFavoriteSport = `Your favorite sport is ${userFavoriteSport}`;
}

// Вывод всей информации
alert(`
    ${userAge}\n 
    ${userTown}\n
    ${userFavoriteSport}\n
`)