const addProductToCart = () => {
// alert('Product added to cart');
const button = document.querySelector('.product__buy-button');
button.className = 'product__buy-button product__buy-button_in-cart';
const quantityInput = document.querySelector('.product__but-quantity');
const quantity = Number(quantityInput.value) || 1;
const buttonLabel = quantity + (quantity === 1 ? ' piece' : ' pieces') + ' in cart';
button.innerHTML = buttonLabel;
}