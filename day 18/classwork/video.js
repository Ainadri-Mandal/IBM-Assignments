let videoContainer = document.getElementById("video");

let data = JSON.parse(localStorage.getItem("videoData"));

async function showData() {
    let box = document.createElement("div");

    let iframe= document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${data.id.videoId}`

    iframe.height = "400px";
    iframe.width = "80%";
    iframe.setAttribute("allowfullscreen", true)

    let title = document.createElement 

    box.append(iframe);
    videoContainer.append(box)
}

showData(videoId);