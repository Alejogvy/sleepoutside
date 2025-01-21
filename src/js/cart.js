import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
  console.log("Cart content:", cartItems);

  const productListElement = document.querySelector(".product-list");
  if (!productListElement) {
    console.error("The cart container was not found in the DOM.");
    return;
  }

  if (cartItems.length === 0) {
    productListElement.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  productListElement.innerHTML = htmlItems.join("");

  // Delete button
  const deleteButtons = productListElement.querySelectorAll(".cart-card__delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = e.target.dataset.id; 
      removeProductFromCart(productId);
    });
  });
}

function removeProductFromCart(productId) {
  let cart = getLocalStorage("so-cart") || [];
  cart = cart.filter((item) => item.Id !== productId);
  setLocalStorage("so-cart", cart);
  renderCartContents();
}

function cartItemTemplate(item) {
  const color = item.Colors && item.Colors[0] ? item.Colors[0].ColorName : "N/A";
  const price = item.FinalPrice || "0.00";

  return `
    <li class="cart-card divider" data-id="${item.Id}">
      <a href="#" class="cart-card__image">
        <img
          src="${item.Image}"
          alt="${item.Name}"
        />
      </a>
      <a href="#">
        <h2 class="card__name">${item.Name}</h2>
      </a>
      <p class="cart-card__color">Color: ${color}</p>
      <p class="cart-card__quantity">qty: 1</p>
      <p class="cart-card__price">$${price}</p>
      <button class="cart-card__delete" data-id="${item.Id}">Eliminate</button>
    </li>
  `;
}

renderCartContents();
