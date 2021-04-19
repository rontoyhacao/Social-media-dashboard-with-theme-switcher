const body = document.querySelector('body');
const themeSwitcher = document.querySelector('#dark-toggle');
const slider = document.querySelector('.slider');

const cards = document.querySelectorAll('.card-container');
function darkModeToggle() {
    const len = cards.length;
    if (themeSwitcher.checked) {
        darkMode()
        for (let i = 0; i < len; i++) {
            cards[i].style.transition = (400 + (3 - i % 4) * 200).toString() + 'ms';
        }
    } else {
        lightMode()
        for (let i = 0; i < len; i++) {
            cards[i].style.transition = (400 + (i % 4) * 200).toString() + 'ms';
        }
    }
    window.setTimeout(() => {
        for (let i = 0, len = cards.length; i < len; i++) {
            cards[i].style.transition = '.3s';
        }
    }, 1000);
}

function darkMode() {
    body.classList.add('dark-mode');
}

function lightMode() {
    body.classList.remove('dark-mode');
}

themeSwitcher.addEventListener('click', darkModeToggle)
slider.addEventListener('keypress', () => {
    themeSwitcher.checked = !themeSwitcher.checked
    darkModeToggle()
});