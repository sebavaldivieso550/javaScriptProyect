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
            themeStyle.href = "../css/carritoDM.css";
            darkModeButton.textContent = "☀️";
        } else {
            themeStyle.href = "../css/carrito.css";
            darkModeButton.textContent = "🌚";
        }
    }
});

/* creacion de la lista con los items guardados en localStorage */
document.addEventListener('DOMContentLoaded', (event) => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));

    if (cartItems) {
        let totalPrice = 0;
        let cartList = document.getElementById("cart-list");

        cartItems.forEach(item => {
            let listItem = document.createElement("li");
            /* image */
            let productImage = document.createElement("img");
            productImage.src = item.image;
            productImage.style.height = "75px";
            productImage.style.width = "75px";
            listItem.appendChild(productImage);
            /* title */
            let itemTitle = document.createElement("span");
            itemTitle.textContent = item.title;
            listItem.appendChild(itemTitle);

            /* Agregue las cantidades */
            let itemQuantity = document.createElement("span");
            itemQuantity.textContent = "Cantidad: " + (item.quantity || 1);
            listItem.appendChild(itemQuantity);
            /* price */
            let itemPrice = document.createElement("p");
            itemPrice.textContent = "$" + item.price;
            listItem.appendChild(itemPrice);
            /* delete-button */
            let deleteButton = document.createElement("button");
            deleteButton.textContent = "🗑️";
            deleteButton.addEventListener('click', () => deleteItemFromCart('cartItems', item));
            listItem.appendChild(deleteButton);
            
            /* total */
            totalPrice += item.price * (item.quantity || 1);

            cartList.appendChild(listItem);
        });

        let listTotalPrice = document.createElement("li");
        listTotalPrice.classList.add("total-price");
        let total = document.createElement("p");
        total.textContent = "TOTAL: $" + totalPrice;
        listTotalPrice.appendChild(total);
        cartList.appendChild(listTotalPrice);

        let buyConfirmButton = document.createElement("button");
        buyConfirmButton.textContent = "COMPRAR";
        buyConfirmButton.addEventListener('click', () => {
            Swal.fire({
                title: 'Confirmar compra?',
                text: '',
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'Si, comprar',
                cancelButtonText: 'No, cancelar',
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Muchas gracias por su compra',
                        'Sus productos seran enviados en una semana',
                        'success'
                    );
                    /* El timeout lo use para que no se me refresque la pagina apenas le da a confirmar compra */
                    setTimeout(() => {
                        deleteAllItemsFromCart('cartItems');
                    }, 3000);
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                  Swal.fire(
                    'Compra cancelada',
                    'Muchas gracias por su visita',
                    'error'
                  );
                }
              });
        })
        cartList.appendChild(buyConfirmButton);

        let deleteAllButton = document.createElement("button");
        deleteAllButton.textContent = "Vaciar carrito";
        deleteAllButton.addEventListener('click', () => deleteAllItemsFromCart('cartItems'));
        cartList.appendChild(deleteAllButton);

    };
});

/* funciones para borrar los items */

/* modifique el delete individual para que reste 1 de la propiedad quantity */
function deleteItemFromCart(key, itemToRemove) {
    let cartItems = JSON.parse(localStorage.getItem(key));
    if (!cartItems) return;
  
    let updatedCartItems = cartItems.map(item => {
      if (item.title === itemToRemove.title) {
        /* Esta linea lleva math.max porque se me genero el problema de que quantity se hacia negativa */
        item.quantity = Math.max(0, (item.quantity || 1) - 1);
      }
      return item;
    });
  
    /* los items con cantidad 0 son deleteados */
    const filteredCartItems = updatedCartItems.filter(item => item.quantity > 0);
  
    localStorage.setItem(key, JSON.stringify(filteredCartItems));
    location.reload();
  }

function deleteAllItemsFromCart(key) {
    localStorage.removeItem(key);
    location.reload(); 
}
