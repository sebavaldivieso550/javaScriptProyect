/* funcion addToCart */
let cartItems = [];

let addToCart = (product) => {
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}