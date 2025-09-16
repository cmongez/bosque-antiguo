function getCart() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}
function saveCart(cart) {
  localStorage.setItem("carrito", JSON.stringify(cart));
  document.getElementById("cartCount").textContent =
    cart.reduce((a, b) => a + b.cantidad, 0);
}
// refrescar badge al cargar
document.addEventListener("DOMContentLoaded", () => saveCart(getCart()));
