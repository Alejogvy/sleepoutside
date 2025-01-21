import { setLocalStorage, getLocalStorage, updateCartCount } from './utils.mjs';
import ProductData from './ProductData.mjs';
import { renderCartContents } from './cart.js';

function updateCartCount() {
  const cartItems = getLocalStorage('so-cart') || [];
  const count = cartItems.length;
  const cartCountElement = document.querySelector('.cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = count;
  }
}

const dataSource = new ProductData("tents");

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();  
  renderCartContents();
});

