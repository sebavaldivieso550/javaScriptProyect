/* funcion addToCart */
/* en la anterior pre-entrega tenia el problema de que cuando agregaba el mismo item mas de una vez, al borrarlo del carrito, me los borraba a todos de ese item */

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

let addToCart = (product) => {
/* agregue esto para subirle las cantidades */
  const existingProduct = cartItems.find(item => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity = (existingProduct.quantity || 1) + 1;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

/* El resto de la correccion en la logica esta en carrito.js */