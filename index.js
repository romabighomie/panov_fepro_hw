let number1 = Number(prompt("Please enter first number", "0"));
let number2 = Number(prompt("Please enter second number", "0"));

if(!Number.isNaN(number1) && !Number.isNaN(number2)) {

    let resultAdd = number1 + number2;
    let resultSub = number1 - number2;
    let resultMult = number1 * number2;
    let resultDiv;

    number1 === 0 || number2 === 0 ?
        resultDiv = 'Cant divide by 0' :
        resultDiv = Math.round(number1 / number2 * 100) / 100;

    number1 < 0 ? number1 = `(${number1})` : `${number1}`;
    number2 < 0 ? number2 = `(${number2})` : `${number2}`;

    alert(
    `User entered ${number1} and ${number2}\n 
    ${number1} + ${number2} = ${resultAdd}\n
    ${number1} - ${number2} = ${resultSub}\n
    ${number1} * ${number2} = ${resultMult}\n
    ${number1} / ${number2} = ${resultDiv}\n`
    );

} else {
    alert('Error. Please enter numbers')
}