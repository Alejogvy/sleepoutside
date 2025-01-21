import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('so-cart')) || [];
  const count = cart.length;
  console.log('Updating cart count to:', count);
  const cartCountElement = document.querySelector('.cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = count;
  } else {
    console.error("Cart count element not found in the DOM.");
  }
}

function addProductToCart(product) {
  console.log("Adding product to cart:", product);
  let cart = JSON.parse(localStorage.getItem("so-cart")) || [];
  cart.push(product);
  console.log("New cart:", cart);
  localStorage.setItem("so-cart", JSON.stringify(cart));
  updateCartCount();
}

async function addToCartHandler(e) {
  console.log("Button clicked, dataset ID:", e.target.dataset.id);
  const productId = e.target.dataset.id;
  const product = await dataSource.findProductById(productId);
  if (product) {
    addProductToCart(product);
  } else {
    console.error("Product not found with ID:", productId);
  }
}

document.addEventListener("click", (e) => {
  if (e.target && e.target.matches(".addToCart")) {
    addToCartHandler(e);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
});

function showAddedToCartNotification() {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = 'Product added to cart';
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 2000);
}

