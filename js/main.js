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
/* esto es parte de la libreria, supongo que crea el swiper, y los botones, no estoy seguro */
var swiper = new Swiper(".mySwiper", {
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
        let button = document.createElement('button');
        button.textContent = "🛒";
/* le agrego un alert onclick */
        button.addEventListener('click', () => {
            alert(`${product.title} agregado al carrito.`);
        });
/* lo coloco en la tarjeta */
        card.appendChild(button);
/* finalmente coloco las tarjetas */
        ofertaContainer.appendChild(card);
    });
});
