const buttons = document.querySelectorAll('button');
const gallery = document.querySelectorAll('img');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        for (let img of gallery) {
            img.classList.remove('hide');
            const images = img.getAttribute('data-filter');
            if (button.textContent === images || button.textContent === 'All') {
                img.classList.add('show');
            } else {
                img.classList.remove('show');
                img.classList.add('hide');
            }
        }
    });
});