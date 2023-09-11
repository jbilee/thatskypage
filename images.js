const photos = [
    { imgId: 0, imageUrl: "https://i.imgur.com/sMB1yPr.jpg", photoDate: "2022 10月", desc: "KRILL COASTER!!!" },
    { imgId: 1, imageUrl: "https://i.imgur.com/hk7suJ8.jpg", photoDate: "2022 12月", desc: "Yukidaruma" },
    { imgId: 2, imageUrl: "https://i.imgur.com/np9cxiu.jpg", photoDate: "2022 12月", desc: "カッコいいポーズのなめちゃん" },
    { imgId: 3, imageUrl: "https://i.imgur.com/ZJT5DgY.jpg", photoDate: "2022 8月", desc: "nomnomnom" },
    { imgId: 4, imageUrl: "https://i.imgur.com/Ql0LeWi.jpg", photoDate: "2022 2月", desc: "バレンタインの船" },
    { imgId: 5, imageUrl: "https://i.imgur.com/vdhE8TM.jpg", photoDate: "2022 8月", desc: "こわいエビの記憶" },
    { imgId: 6, imageUrl: "https://i.imgur.com/7rubvwH.jpg", photoDate: "2022 ?", desc: "なめちゃんと書庫でこそこそ" },
    { imgId: 7, imageUrl: "https://i.imgur.com/UfDvVIp.jpg", photoDate: "2022 8月", desc: "大好きな家族写真" },
    { imgId: 8, imageUrl: "https://i.imgur.com/smmeYmI.jpg", photoDate: "2022 7月", desc: "クラゲの記憶" },
    { imgId: 9, imageUrl: "https://i.imgur.com/xJnxmLW.jpg", photoDate: "2022 1月", desc: "dansu dansu" },
    { imgId: 10, imageUrl: "https://i.imgur.com/MvZdg9O.jpg", photoDate: "?", desc: "女の子の格好をしています" },
    { imgId: 11, imageUrl: "https://i.imgur.com/FjhoacI.jpg", photoDate: "?", desc: "Pretty purple caves!" },
    { imgId: 12, imageUrl: "https://i.imgur.com/LOEzTXa.jpg", photoDate: "2022 6月", desc: "チップとデールがちゅんちゅん" },
    { imgId: 13, imageUrl: "https://i.imgur.com/3EwXuE5.jpg", photoDate: "2022 6月", desc: "昔の姿もかわいい！" },
    { imgId: 14, imageUrl: "https://i.imgur.com/nPGL7k9.jpg", photoDate: "2022 2月", desc: "♡" },
    { imgId: 15, imageUrl: "https://i.imgur.com/Of0UEnZ.jpg", photoDate: "2022 6月", desc: "ピーターパンのようななにか" },
    { imgId: 16, imageUrl: "https://i.imgur.com/zZ2qs0D.jpg", photoDate: "2022 1月", desc: "フレさんたちと" },
    { imgId: 17, imageUrl: "https://i.imgur.com/kFJHMTU.jpg", photoDate: "2022 12月", desc: "コンサート！！！" },
    { imgId: 18, imageUrl: "https://i.imgur.com/bQjweR6.jpg", photoDate: "2022 12月", desc: "大好きな写真です！" },
    { imgId: 19, imageUrl: "https://i.imgur.com/Ip4WAne.jpg", photoDate: "2022 2月", desc: "エビキング！" }
]

const listArea = document.querySelector(".album-list");
const pageArea = document.querySelector(".album-page");

for (let data of photos) {
    const newElem = document.createElement("div");
    newElem.setAttribute("id", `${data.imgId}`);
    newElem.classList.add("list-img");
    newElem.innerHTML = `<a onclick="albumPage(event)"><img src="${data.imageUrl}"></a>`;
    listArea.append(newElem);
}


function albumPage(e) {
    const viewId = e.target.parentNode.parentNode.id;
    listArea.style.display = "none";
    pageArea.style.display = "flex";

    document.querySelector(".page-img").setAttribute("src", e.target.src);
    document.querySelector(".page-details h1").textContent = photos[viewId].photoDate;
    document.querySelector(".page-details p").textContent = photos[viewId].desc;
    document.querySelector(".page-details .id-invis").textContent = viewId;
}

function closePage() {
    listArea.style.display = "flex";
    pageArea.style.display = "none";
    viewId = "";
}
