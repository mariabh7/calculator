const main = document.getElementById("main");
const circle = document.getElementById("circle");
const numbers = document.getElementsByClassName("number");
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
//

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
} let k;
Array.from(numbers).forEach(number => {

    number.addEventListener('click', () => {
        result.innerHTML = number.textContent;
        k = number.textContent;
        console.log(k);
    })


});
Array.from(operators).forEach(operator => {
    operator.addEventListener("click", () => {
        let op = operator.textContent;
        console.log(op);
        switch (op) {
            case '+':
                result.innerHTML = parseInt(k) + parseInt(k);
                break;
            default: console.log('need to fix some');

        }
    })
})
