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
                    alert(`${product.title} agregado al carrito.`);
                });
                card.appendChild(cartButton);

                productsCards.appendChild(card);
        });
    };

    createProductCards(data);
    
    let sortProductsAZ = () => {
        let sortedData = [...data].sort((a, b) => a.title.localeCompare(b.title));
        createProductCards(sortedData);
    };
    let sortProductsZA = () => {
        let sortedData = [...data].sort((a, b) => b.title.localeCompare(a.title));
        createProductCards(sortedData);
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