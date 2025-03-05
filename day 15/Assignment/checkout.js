let cart = JSON.parse(localStorage.getItem("cart")) || [];
function displayCart() {
    let cartContainer = document.getElementById("order-summary");

    if (!cartContainer) return;

    cartContainer.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rating</th>
        </tr>
    `;

    cart.forEach((item) => {
        let row = cartContainer.insertRow();
        row.innerHTML = `
            <td>${item.name}</td>
            <td>₹${item.price.toFixed(2)}</td>
            <td>${item.category}</td>
            <td><img src="${item.image}" style="height:50px; width:50px;"></td>
            <td>${item.rating}</td>
        `;
    });

    localStorage.setItem("cart", JSON.stringify(cart));
}

let totalPrice = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
document.getElementById("checkout-total").innerText = `₹${totalPrice.toFixed(2)}`;

document.addEventListener("DOMContentLoaded", () => {
    displayCart();
});