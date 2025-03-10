let API_KEY = "AIzaSyA9tjlgj15UHu0BwDBg2MjhCfVwcZRnPTk";
let search_term = document.getElementById("query").value || "university";
let videoContainer = document.getElementById('video-data');


async function getData() {
  try {
    let data =
      await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}
`);
    let response = await data.json();
    console.log(data);
    console.log(response.items);
    showVideoCards(response.items);
  } catch (error) {
    console.log("Error")
  }
}
getData();

async function showVideoCards(array) {
    console.log(array)
    array.forEach(({snippet}) =>{
        let videoBox = document.createElement('div')
        videoBox.className = "videos";
        // videoBox.style.width = "20%";
        videoBox.style.border = "1px solid gray"

        let img = document.createElement('img')
        img.src = snippet.thumbnails.medium.url;

        let title = document.createElement("p");
        title.innerText = snippet.title;

        let channel_title = document.createElement("p");
        channel_title.innerText = snippet.channelTitle

        videoBox.append(img , title, channel_title);

        videoContainer.append(videoBox);


        videoBox.onclick = (()=>{
            let data ={
                snippet, id
            }

            localStorage.setItem("videoData", JSON.stringify(data));
            window.location.href = "video.html"
        })
    });
}
