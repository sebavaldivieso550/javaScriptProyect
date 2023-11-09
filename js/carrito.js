document.addEventListener('DOMContentLoaded', (event) => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));

    if (cartItems) {
        let cartList = document.getElementById("cart-list");
        cartItems.forEach(item => {
            let listItem = document.createElement("li");
            let productImage = document.createElement("img");
            productImage.src = item.image;
            productImage.style.height = "75px";
            productImage.style.width = "75px";
            listItem.appendChild(productImage);
            let itemTitle = document.createElement("span");
            itemTitle.textContent = item.title;
            listItem.appendChild(itemTitle);
            cartList.appendChild(listItem);
        });
    };
});