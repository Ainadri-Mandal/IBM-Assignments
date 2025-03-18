let parent = document.getElementById("parent");
// let updateBtn = document.getElementById("updateBtn");

async function getData() {
  let data = await fetch(`http://localhost:3000/posts`);
  let response = await data.json();
  showData(response);
  console.log(response);
}
getData();

async function showData(arr) {
  arr.forEach((element, index) => {
    let box = document.createElement("div");
    box.className = "box";

    let title = document.createElement("p");
    title.innerText = element.title;

    let views = document.createElement("p");
    views.innerText = element.views;

    box.append(title, views);

    parent.append(box);

    box.addEventListener("click", () => {
      let updateBtn = document.createElement("button");
      updateBtn.width = "10px";
      updateBtn.height = "10px";
    });
  });
}

let buton = document.getElementById("btn");
buton.addEventListener("click", async () => {
  let value = document.getElementById("input").value;
  let obj = {
    title: value,
    views: Math.random() * 100,
  };

  try {
    let response = await fetch(`http://localhost:3000/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    if (response) {
      getData();
      alert("data save successfully!!");
    }
    let res = await response.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
});

// box.addEventListener("click", async () => {
//     let updateBtn = document.createElement("button");
//     updateBtn.width = "10px";
//     updateBtn.height = "10px";

//     const signButton = document.querySelector("#signButton");
//     const log = document.querySelector("#log");

//     signButton.addEventListener("click", async () => {
//         let sign = prompt("What's your sign?");

//         let obj = {
//             title: sign,
//             views: Math.random() * 100
//         }

//         try {
//             let response = await fetch(`http://localhost:3000/posts`, {
//                 method: "PATCH",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(obj)

//             });
//             if (response) {
//                 getData();
//                 alert("data save successfully!!")
//             }
//             let res = await response.json();
//             console.log(res);

//         } catch (error) {
//             console.log(error);

//         }

//     });

// })
