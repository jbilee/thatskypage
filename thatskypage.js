/*
var req = new XMLHttpRequest();
req.open("GET", "images.json");
req.onreadystatechange = function(){
    if( this.readyState == 4 ){
        var data = JSON.parse(this.response);
        for( var i=0; i<data.length; i++ ){
            var div = document.createElement("div");
            div.setAttribute("class", "image");
            div.onclick = function(){
                this.classList.toggle("image-selected");
            }
            var img = document.createElement("img");
            img.src = data[i];
            div.appendChild(img);
            document.body.appendChild(div);
        }
    }
}
req.send();
*/


function selectAll(){ //btn
    var images = document.getElementsByClassName("image");
    for( var i=0; i<images.length; i++ ){
        images[i].classList.add("image-selected");
    }
    //btn.value = "Unselect All";
}

function unselectAll(){
    var images = document.getElementsByClassName("image");
    for( var i=0; i<images.length; i++ ){
        images[i].classList.remove("image-selected");
    }
}
