let parent = document.getElementById("parent");


async function getData() {
    let data = await fetch(`http://localhost:3000/posts`);

    let responce = await data.json();

    showData(responce);
    console.log(responce);
}

getData();

// ----> Showing the data--->
async function showData(arr) {
    parent.innerHTML = null;
    arr.forEach((el, index) => {
        let box = document.createElement("div");
        let updateBtn = document.createElement("button");
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.className = 'btn';
        updateBtn.innerText = "Update";
        updateBtn.className = "btn";
        box.className = "box";

        let title = document.createElement("p");
        title.innerText = el.title;

        let views = document.createElement("p");
        views.innerText = el.views;

        box.append(title, views, updateBtn, deleteBtn);
        parent.append(box);


        updateBtn.addEventListener("click", async () => {
            let newVal = prompt("Enter New Title");
            let id = el.id;
            let obj = {
                title: newVal,
                views: Math.random(100, 1000),
            };
            try {
                let responce = fetch(`http://localhost:3000/posts/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(obj),
                });
                if (responce) {
                    getData();
                    alert("Data updated successfully");
                }
                let res = await responce.json();
                console.log(res);
            } catch (e) {
                console.log(e);
            }
        });


        deleteBtn.addEventListener('click', () => {
            let id = el.id;
            fetch(`http://localhost:3000/posts/${id}`, {
                method: 'DELETE',
            })
                .then(() => {
                    getData();
                    alert("Data deleted successfully");
                })
                .catch((e) => {
                    console.log(e);
                });

        });

    });
}

let btn = document.getElementById("btn");

// input data adding --->
btn.addEventListener("click", async () => {
    let value = document.getElementById("input").value;
    let obj = {
        title: value,
        views: Math.random(100, 1000),
    };

    try {
        let responce = fetch(`http://localhost:3000/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        });

        if (responce) {
            getData();
            alert("Data saved successfully");
        }

        let res = await responce.json();
        console.log(res);
    } catch (e) {
        console.log(e);
    }
});