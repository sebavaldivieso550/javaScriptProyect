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
            themeStyle.href = "../css/productosDM.css";
            darkModeButton.textContent = "☀️";
        } else {
            themeStyle.href = "../css/productos.css";
            darkModeButton.textContent = "🌚";
        }
    }
});
/* creacion de las tarjetas usando json */
fetch("../json/productos.json")
    .then(response => response.json())
    .then(data => {
        let productsCards = document.getElementById("products-cards");
        let createProductCards = (productData) => {
            productsCards.innerHTML = "";
            productData.forEach(product => {
                let card = document.createElement("div");
                card.classList.add("card");
                let img = document.createElement("img");
                img.src = product.image;
                card.appendChild(img);
                let title = document.createElement("h2");
                title.textContent = product.title;
                card.appendChild(title);
                let price = document.createElement("p");
                price.textContent = "$" + product.price;
                card.appendChild(price);
                let cartButton = document.createElement('button');
                cartButton.textContent = "🛒";
                cartButton.addEventListener('click', () => {
                    addToCart(product);    
                    Swal.fire({
                        title: "Producto agregado",
                        text: `${product.title} ha sido agregado al carrito`,
                        icon: "Continuar"
                      });;
                });
                card.appendChild(cartButton);

                productsCards.appendChild(card);
        });
    };

    createProductCards(data);
    /* funciones y botones para ordenar de AZ, ZA, y por oferta */
    let sortProductsAZ = () => {
        let sortedData = [...data].sort((a, b) => a.title.localeCompare(b.title));
        createProductCards(sortedData);
        let cardsContainer = document.getElementById("products-cards");
        cardsContainer.style.height = "600vh";
    };
    let sortProductsZA = () => {
        let sortedData = [...data].sort((a, b) => b.title.localeCompare(a.title));
        createProductCards(sortedData);
        let cardsContainer = document.getElementById("products-cards");
        cardsContainer.style.height = "600vh";
    }
    let sortProductsOferta = () => {
        let filteredDAta = data.filter(product => product.oferta === true);
        createProductCards(filteredDAta);
        let cardsContainer = document.getElementById("products-cards");
        cardsContainer.style.height = "200vh";
    }

    let sortAZButton = document.getElementById("sort-AZ");
    let sortZAButton = document.getElementById("sort-ZA");
    let sortOfertaButton = document.getElementById("sort-oferta");

    sortAZButton.addEventListener("click", sortProductsAZ);
    sortZAButton.addEventListener("click", sortProductsZA);
    sortOfertaButton.addEventListener("click", sortProductsOferta);
});