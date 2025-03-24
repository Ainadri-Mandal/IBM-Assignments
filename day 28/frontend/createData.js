const button = document.getElementById("submit-products");

button.addEventListener("click", async()=>{

    const name = document.getElementById("name").value;
    const desc = document.getElementById("desc").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const image = document.getElementById("img").value;

    const obj = {
        name, price, category, image, desc
    }

    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:8080/api/create-product", {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            'Authorization': token
        },
        body:JSON.stringify(obj)
    });

    const res = await response.json();

    Toastify({
        text: `${res.message}`,
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();

    console.log(res)

})