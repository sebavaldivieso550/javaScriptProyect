document.addEventListener('DOMContentLoaded', (event) => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));

    if (cartItems) {
        let totalPrice = 0;
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
            let itemPrice = document.createElement("p");
            itemPrice.textContent = "$" + item.price;
            listItem.appendChild(itemPrice);

            totalPrice += item.price;

            cartList.appendChild(listItem);
        });

        let listTotalPrice = document.createElement("li");
        listTotalPrice.classList.add("total-price");
        let total = document.createElement("p");
        total.textContent = "TOTAL:" + "$"+totalPrice;
        listTotalPrice.appendChild(total);
        cartList.appendChild(listTotalPrice);
    };
});