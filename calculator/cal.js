const main = document.getElementById("main");
const circle = document.getElementById('toggle');
const themes = {
    theme1: document.getElementById('theme1'),
    theme2: document.getElementById('theme2'),
    theme3: document.getElementById('theme3'),
};
const themesh = {
    theme1: 3,
    theme2: 9,
    theme3: 16,
}
let i = 0;
let currentThemeClass = null;
let currentTheme = null;
for (let theme in themes) {
    themes[theme].addEventListener('click', function () {
        for (let number in themesh) {
            if (theme == number) {
                // Remove the previous theme class if it exists
                if (currentThemeClass) {
                    circle.classList.remove(currentThemeClass);

                }
                // Add the new theme class
                currentThemeClass = `left-${themesh[number]}`;
                circle.classList.add(currentThemeClass); console.log(currentThemeClass);
            }
        }
        if (currentTheme) {
            main.classList.remove(currentTheme);
        }
        currentTheme = `${theme}`;
        main.classList.add(currentTheme);
    })
}
