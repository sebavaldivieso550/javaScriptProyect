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
/* Use una expresion regular para el email
todavia no la entiendo, pero ahi esta, funciona xd */
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


        function validateEmail(emailInput) {
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          
            return emailRegex.test(emailInput);
        }
            
            if (validateEmail(emailInput)) {
                emailInput.classList.remove('invalid');
                valid = false;
              } else {
                emailInput.classList.add('invalid');
              }

        if (valid) {
            Swal.fire({
                title: "Enviado",
                text: "Formulario enviado exitosamente.",
                icon: "Continuar"
              });;;
        } else {
            Swal.fire({
                title: "Invalido",
                text: "Validacion de formulario erronea.",
                icon: "Continuar"
              });;;
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
