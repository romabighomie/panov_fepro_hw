let mathAction = prompt('Choose a math action (add, sub, mult, div)','add');
let number1 = Number(prompt("Please enter first number", "0"));
let number2 = Number(prompt("Please enter second number", "0"));

if(
    mathAction === 'add' ||
    mathAction === 'sub' ||
    mathAction === 'mult' ||
    mathAction === 'div' &&
    !Number.isNaN(number1) &&
    !Number.isNaN(number2)
) {
    let mathResult;
    let verifiedNumber1;
    let verifiedNumber2;

    number1 < 0 ? verifiedNumber1 = `(${number1})` : verifiedNumber1 =`${number1}`;
    number2 < 0 ? verifiedNumber2 = `(${number2})` : verifiedNumber2 =`${number2}`;

    switch (mathAction) {
        case 'add':
            mathResult = number1 + number2;
            alert(`${verifiedNumber1} + ${verifiedNumber2} = ${mathResult}`);
            break;

        case 'sub':
            mathResult = number1 - number2;
            alert(`${verifiedNumber1} - ${verifiedNumber2} = ${mathResult}`);
            break;

        case 'mult':
            mathResult = number1 * number2;
            alert(`${verifiedNumber1} * ${verifiedNumber2} = ${mathResult}`);
            break;

        case 'div':
            number1 === 0 || number2 === 0 ?
                mathResult = 'Cant divide by 0' :
                mathResult = Math.round(number1 / number2 * 100) / 100;
            alert(`${verifiedNumber1} / ${verifiedNumber2} = ${mathResult}`);
            break;

        default: break;
    }

} else { alert('Error. Please enter the correct math action from the list and enter the numbers') }