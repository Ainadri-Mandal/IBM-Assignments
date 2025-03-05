let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
    let cartContainer = document.getElementById("cart");
    let totalPriceElement = document.getElementById("total-price");

    if (!cartContainer || !totalPriceElement) return;

    cartContainer.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rating</th>
            <th>Quantity</th>
            <th>Actions</th>
        </tr>
    `;

    let totalPrice = 0;

    cart.forEach((item, index) => {
        let row = cartContainer.insertRow();
        row.innerHTML = `
            <td>${item.name}</td>
            <td>₹${item.price.toFixed(2)}</td>
            <td>${item.category}</td>
            <td><img src="${item.image}" style="height:50px; width:50px;"></td>
            <td>${item.rating}</td>
            <td>
                <button onclick="changeQuantity(${index}, -1)">-</button>
                ${item.quantity}
                <button onclick="changeQuantity(${index}, 1)">+</button>
            </td>
            <td><button onclick="removeItem(${index})">Remove</button></td>
        `;

        totalPrice += item.price ;
    });

    totalPriceElement.innerHTML = `Total Price: ${totalPrice.toFixed(2)}`;

    localStorage.setItem("cart", JSON.stringify(cart));
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart)); 
    displayCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Thank you for your purchase!");
    localStorage.removeItem("cart");
    cart = [];
    displayCart();
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    window.location.href = "checkout.html";
}

function backToProducts() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
    displayCart();
});