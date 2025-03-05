document.addEventListener("DOMContentLoaded", () => {
    const pathname = window.location.pathname;

    if (pathname.includes("index.html")) fetchProducts();
    if (pathname.includes("users.html")) fetchUsers();
    if (pathname.includes("product-detail.html")) fetchProductDetail();
    if (pathname.includes("user-detail.html")) fetchUserDetail();
});

// Fetch and display products
async function fetchProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    displayProducts(products);
    setupSearch(products);
    setupSorting(products);
    setupFiltering(products);
}

// Display products
function displayProducts(products) {
    const container = document.getElementById("productsGrid");
    container.innerHTML = products.map(p => `
        <div class="card">
            <img src="${p.image}" width="100">
            <h3>${p.title}</h3>
            <p>$${p.price} | Rating: ${p.rating.rate}</p>
            <button onclick="viewProduct(${p.id})">View Details</button>
        </div>
    `).join("");
}

// Navigate to product detail page
function viewProduct(id) {
    localStorage.setItem("productId", id);
    window.location.href = "product-detail.html";
}

// Fetch product details
async function fetchProductDetail() {
    const id = localStorage.getItem("productId");
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();
    document.getElementById("productDetail").innerHTML = `
        <img src="${product.image}" width="150">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
    `;
}

// Fetch and display users
async function fetchUsers() {
    const res = await fetch("https://fakestoreapi.com/users");
    const users = await res.json();
    displayUsers(users);
}

// Display users
function displayUsers(users) {
    const container = document.getElementById("usersGrid");
    container.innerHTML = users.map(u => `
        <div class="card">
            <h3>${u.name.firstname} ${u.name.lastname}</h3>
            <p>${u.email}</p>
            <button onclick="viewUser(${u.id})">View Details</button>
        </div>
    `).join("");
}

// Navigate to user detail page
function viewUser(id) {
    localStorage.setItem("userId", id);
    window.location.href = "user-detail.html";
}

// Fetch user details
async function fetchUserDetail() {
    const id = localStorage.getItem("userId");
    const res = await fetch(`https://fakestoreapi.com/users/${id}`);
    const user = await res.json();
    document.getElementById("userDetail").innerHTML = `
        <h2>${user.name.firstname} ${user.name.lastname}</h2>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Address: ${user.address.street}, ${user.address.city}</p>
    `;
}

// Search bar with debouncing
function setupSearch(items) {
    let timeout;
    document.getElementById("searchProduct")?.addEventListener("input", (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const query = e.target.value.toLowerCase();
            displayProducts(items.filter(p => p.title.toLowerCase().includes(query)));
        }, 300);
    });
}

// Sorting products
function setupSorting(products) {
    document.getElementById("sortProduct")?.addEventListener("change", (e) => {
        let sorted = [...products];
        if (e.target.value === "low") sorted.sort((a, b) => a.price - b.price);
        if (e.target.value === "high") sorted.sort((a, b) => b.price - a.price);
        displayProducts(sorted);
    });
}