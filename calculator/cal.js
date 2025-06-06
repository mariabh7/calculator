const main = document.getElementById("main");
const circle = document.getElementById("circle");
const result = document.getElementById('result');
const operators = document.querySelectorAll(".operator");
let currentThemeClass = null;
let currentTheme = null;
const themes = {
    theme1: document.getElementById('theme1'),
    theme2: document.getElementById('theme2'),
    theme3: document.getElementById('theme3'),
};
const position = {
    theme1: `left-3`,
    theme2: `left-10`,
    theme3: `left-16`,
}
for (let theme in themes) {
    themes[theme].addEventListener('click', function () {
        for (let number in position) {
            if (theme == number) {
                // Remove the previous position  class if it exists
                if (currentThemeClass) {
                    circle.classList.remove(currentThemeClass);
                }
                // Add the new theme class
                currentThemeClass = position[number];
                circle.classList.add(currentThemeClass);
                console.log(currentThemeClass);
            }
        }
        if (currentTheme) {
            main.classList.remove(currentTheme);
        }
        currentTheme = `${theme}`;
        main.classList.add(currentTheme);

    })
}

let currentInputed = '';
let previousInputed = '';
let operations = '';
const f1 = (number) => {
    currentInputed += number;
    result.innerText = previousInputed + operations + currentInputed;
}
const f2 = (operator) => {
    if (currentInputed === '') return;
    if (previousInputed !== '') {
        f3();
    }
    operations = operator;
    previousInputed = currentInputed;
    currentInputed = '';
    result.innerText = previousInputed + operations + currentInputed;
}
const f3 = () => {
    if (currentInputed === '') return;
    let resultValue = 0;
    const prev = parseFloat(previousInputed);
    const current = parseFloat(currentInputed);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operations) {
        case '+':
            resultValue = prev + current;
            break;
        case '-':
            resultValue = prev - current;
            break;
        case '*':
            console.log(prev);
            console.log(current);
            resultValue = prev * current;
            break;
        case '/':
            resultValue = prev / current;
            break;
        default:
            return;
    }
    currentInputed = resultValue.toString();
    operations = '';
    previousInputed = '';
    result.innerText = currentInputed;
}
const f4 = () => {
    currentInputed = '';
    previousInputed = '';
    operations = '';
    result.innerText = '0';
}
