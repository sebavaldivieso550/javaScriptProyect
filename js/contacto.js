/* darkmode button */
document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeButton = document.getElementById('darkmode-button');
    const themeStyle = document.getElementById('theme-style');

    let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

    applyTheme();

    darkModeButton.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        localStorage.setItem('isDarkMode', isDarkMode);
        applyTheme();
    });

    function applyTheme() {
        if (isDarkMode) {
            themeStyle.href = "../css/contactoDM.css";
            darkModeButton.textContent = "☀️";
        } else {
            themeStyle.href = "../css/contacto.css";
            darkModeButton.textContent = "🌚";
        }
    }
});
/* validacion de datos */
document.addEventListener('DOMContentLoaded', (event) => {
    let form = document.querySelector('.form');
    let nameInputs = document.querySelectorAll('.name-last');
    let emailInput = document.getElementById('email-input');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let valid = true;

        nameInputs.forEach(input => {
            if (input.value.length < 3) {
                valid = false;
                input.classList.add('invalid');
            } else {
                input.classList.remove('invalid');
            }
        });

        if (!emailInput.value.includes('@')) {
            valid = false;
            emailInput.classList.add('invalid');
        } else {
            emailInput.classList.remove('invalid');
        }

        if (valid) {
            alert('Formulario enviado exitosamente');
        } else {
            alert('Validacion de formulario erronea');
        }
    });

/* validacion cuando se cambia de input */
/* no estoy seguro si me quedo bien */
    nameInputs.forEach(input => {
        input.addEventListener('input', function () {
            if (this.value.length >= 3) {
                this.classList.remove('invalid');
            }
        });
    });

    emailInput.addEventListener('input', function () {
        if (this.value.includes('@')) {
            this.classList.remove('invalid');
        }
    });
});
