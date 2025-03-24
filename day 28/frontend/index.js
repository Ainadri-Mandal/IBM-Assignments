document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    });

    console.log(res)

    const data = await res.json();
    console.log(data)
    if (res.ok) {
        Toastify({
            text: "Registration Successful! Redirecting...",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "green",
        }).showToast();

        setTimeout(() => {
            window.location.href = "login.html";
        }, 3000);
    } else {
        Toastify({
            text: data.message || "Registration Failed",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "red",
        }).showToast();
    }
});

document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    console.log(data)
    if (data.token) {
        localStorage.setItem('token', data.token);
        Toastify({
            text: "Login Successful! Redirecting...",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "green",
        }).showToast();

        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 3000);
    } else {
        Toastify({
            text: "Login Failed! Invalid credentials",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "red",
        }).showToast();
    }
});


// const productContainer = document.getElementById("product-container");
// const nextBtn = document.getElementById("next-btn");

// let currentPage = 1;

// async function fetchProducts() {
//     try {
//         const response = await fetch(`http://localhost:8080/api/products?page=${currentPage}`,{
//             method:"GET"
//         });
//         const data = await response.json();

//         console.log(data)

//         displayProducts(data.products);
//     } catch (error) {
//         console.error("Error fetching products:", error);
//         Toastify({
//             text: `${error.message}`,
//             duration: 3000,
//             close: true,
//             gravity: "top",
//             position: "right",
//             backgroundColor: "orange",
//         }).showToast();
//     }
// }

// function displayProducts(products) {
//     products.forEach((product, index) => {
//         let productBox = document.createElement("div");
//         productBox.className = "product-box";

//         let heading = document.createElement("h3");
//         heading.innerText = product.category || "No Category";

//         let img = document.createElement("img");
//         img.src = product.image || "placeholder.jpg";


//         let name = document.createElement("p");
//         name.innerText = product.name;

//         let price = document.createElement("p");
//         price.innerText = `Price: $${product.price}`;

//         let rating = document.createElement("p");
//         rating.innerText = `Rating: ${product.rating || "N/A"}`;

//         let button = document.createElement("button");
//         button.innerText = "Add to Cart";
//         button.addEventListener("click", () => {
//             addToCart(product);
//         });

//         productBox.append(heading, img, name, price, rating, button);
//         productContainer.append(productBox);
//     });
// }


// nextBtn.addEventListener("click", () => {
//     currentPage++;
//     fetchProducts();
// });

// fetchProducts();


const productContainer = document.getElementById("product-container");

let currentPage = 1;
let isFetchingData = false;

async function fetchProducts() {
    // showSkeleton(50);
    if (isFetchingData) return;
    isFetchingData = true;

    try {
        setTimeout(async function () {
            const response = await fetch(`http://localhost:8080/api/products?page=${currentPage}`, {
                method: "GET"
            });

            const data = await response.json();
            console.log(data);

            // productContainer.innerHTML = null;

            if (data.products.length > 0) {
                displayProducts(data.products);
                currentPage++;
            } else {
                window.removeEventListener("scroll", handleScroll);
            }
        }, 2000)


    } catch (error) {
        console.error("Error fetching products:", error);
    } finally {
        isFetchingData = false;
    }
}

function showSkeleton(count = 15) {
    productContainer.innerHTML = null;
    for (let i = 0; i < count; i++) {
        let skeletonBox = document.createElement("div");
        skeletonBox.className = "product-box";

        let skeletonImg = document.createElement("div");
        skeletonImg.className = "skeleton skeleton-image";

        let skeletonText1 = document.createElement("div");
        skeletonText1.className = "skeleton skeleton-text";

        let skeletonText2 = document.createElement("div");
        skeletonText2.className = "skeleton skeleton-text";

        let skeletonButton = document.createElement("button");
        skeletonButton.className = "skeleton skeleton-button";

        skeletonBox.appendChild(skeletonImg, skeletonText1, skeletonText2, skeletonButton);
        productContainer.appendChild(skeletonBox);

    }
}

function displayProducts(products) {
    products.forEach((product) => {
        let productBox = document.createElement("div");
        productBox.className = "product-box";

        let heading = document.createElement("h3");
        heading.innerText = product.category || "No Category";

        let img = document.createElement("img");
        img.src = product.image || "placeholder.jpg";

        let name = document.createElement("p");
        name.innerText = product.name;

        let price = document.createElement("p");
        price.innerText = `Price: $${product.price}`;

        let rating = document.createElement("p");
        rating.innerText = `Rating: ${product.rating || "N/A"}`;

        let button = document.createElement("button");
        button.innerText = "Add to Cart";
        button.addEventListener("click", () => {
            addToCart(product);
        });

        productBox.append(heading, img, name, price, rating, button);
        productContainer.append(productBox);
    });
}

function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        fetchProducts();
    }
}

window.addEventListener("scroll", handleScroll);

fetchProducts();

function addToCart(product) {
    Toastify({
        text: `${product.name} is added to cart`,
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
}


