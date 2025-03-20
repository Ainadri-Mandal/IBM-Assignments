document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        alert("Access Denied! Please Register or Login!");
        return window.location.href = 'login.html';
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    let dataContainer = document.getElementById('show-data');
    dataContainer.className = 'container';

    const token = localStorage.getItem('token');
    try {
        const res = await fetch('http://localhost:5000/v1/api/dashboard', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': `${token}` },
        });
        const data = await res.json();
        data.map((el, index) => {
            let name = document.createElement('h2');
            let price = document.createElement('p');

            name.textContent = `Name: ${el.name}`;
            price.textContent = `Price: ${el.price}`;

            dataContainer.appendChild(name); 
            dataContainer.appendChild(price);
        });

    } catch (e) {
        console.log(e);
    }
});