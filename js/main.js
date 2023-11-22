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
                themeStyle.href = "./css/stylesDM.css";
                darkModeButton.textContent = "☀️";
            } else {
                themeStyle.href = "./css/styles.css";
                darkModeButton.textContent = "🌚";
            }
        }
    });

/* Busco el id swiper-wrapper */
let swiperWrapper = document.getElementById('swiper-wrapper');
/* filtro los elementos en oferta */
let ofertaProducts = products.filter((product) => product.oferta === false);
/* creo las img y les doy src y alt de los productos en oferta  */
/* luego con appendchild ubico lo que necesito */
ofertaProducts.forEach((product) => {
    let swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');
    
    let img = document.createElement('img');
    img.src = product.image;
    img.alt = product.title;
    
    swiperSlide.appendChild(img);
    swiperWrapper.appendChild(swiperSlide);
});
/* swiper */
let swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

/* Para maquetar las tarjetas */
/* espero q cargue el html */
document.addEventListener("DOMContentLoaded", function() {
/* ubico donde colocarlas con el id ofertas */
    let ofertaContainer = document.getElementById('ofertas');
/* filtro los productos en oferta y los paso a una varianle nueva */
    let ofertaProducts = products.filter((product) => product.oferta === true);
/* creo el loop para hacer una card de cada uno con la clase card */
    ofertaProducts.forEach((product) => {
        let card = document.createElement('div');
        card.classList.add('card');
/* les doy su img y alt desde las propias de cada uno */
        let img = document.createElement('img');
        img.src = product.image;
        img.alt = product.title;
/* coloco las img */
        card.appendChild(img);
/* creo el titulo de la tarjeta */
        let title = document.createElement('h3');
        title.textContent = product.title;
/* lo coloco */
        card.appendChild(title);
/* " precio */
        let price = document.createElement('p');
        price.textContent = "$" + product.price;
/* " */
        card.appendChild(price);
/* sumo el button */
        let cartButton = document.createElement('button');
        cartButton.textContent = "🛒";
/* le agrego un alert y la funcion addToCart onclick */
        cartButton.addEventListener('click', () => {
            addToCart(product);
            Swal.fire({
                title: "Producto agregado",
                text: `${product.title} ha sido agregado al carrito`,
                icon: "Continuar"
              });;
        });
/* lo coloco en la tarjeta */
        card.appendChild(cartButton);
/* finalmente coloco las tarjetas */
        ofertaContainer.appendChild(card);
    });
});