let userComment = document.querySelector(".comment");
let userSubmit = document.querySelector(".commentSubmit");
let outputArea = document.querySelector(".afterArea");
let commentCount = 0;

function addBubble() {
    let userInput = userComment.value;
    let newArea = document.createElement("p");
    let randomizer = Math.floor(Math.random() * 4);

    if (!userInput) {
        alert("Enter text!")
    }
    else if (commentCount == 5) {
        document.querySelector('.afterArea').children[1].remove();
        newArea.setAttribute("class", "bubble");
        chngColor(newArea, randomizer);
        outputArea.insertBefore(newArea, document.querySelector("#comment"));
        newArea.textContent = `${userInput}`;
    }
    else {
        newArea.setAttribute("class", "bubble");
        chngColor(newArea, randomizer);
        outputArea.insertBefore(newArea, document.querySelector("#comment"));
        newArea.textContent = `${userInput}`;
        commentCount++;
    }
}

function chngColor(areaToPaint, num) {
    switch (num) {
        case 0:
            areaToPaint.style.backgroundColor = "#461959";
            break;
        case 1:
            areaToPaint.style.backgroundColor = "#7A316F";
            break;
        case 2:
            areaToPaint.style.backgroundColor = "#CD6688";
            break;
        case 3:
            areaToPaint.style.backgroundColor = "#EF6262";
    }
}

userSubmit.addEventListener("click", addBubble);








/*
let userComment = document.querySelector(".comment");
let userSubmit = document.querySelector(".commentSubmit");
let outputArea = document.querySelector(".afterArea");
let commentCount = 0;

function addBubble() {
    let userInput = userComment.value;
    let newArea = document.createElement("p");
    let rand = Math.floor(Math.random() * 4);

    if (!userInput) {
        alert("Enter text!")
    }
    else if (commentCount == 5) {
        document.querySelector('.afterArea').children[1].remove();
        newArea.setAttribute("class", "bubble");
        switch (rand) {
            case 0:
                newArea.style.backgroundColor = "#461959";
                break;
            case 1:
                newArea.style.backgroundColor = "#7A316F";
                break;
            case 2:
                newArea.style.backgroundColor = "#CD6688";
                break;
            case 2:
                newArea.style.backgroundColor = "#EF6262";
        }
        outputArea.insertBefore(newArea, document.querySelector("#comment"));
        newArea.textContent = `${userInput}`;
    }
    else {
        newArea.setAttribute("class", "bubble");
        switch (rand) {
            case 0:
                newArea.style.backgroundColor = "#461959";
                break;
            case 1:
                newArea.style.backgroundColor = "#7A316F";
                break;
            case 2:
                newArea.style.backgroundColor = "#CD6688";
                break;
            case 2:
                newArea.style.backgroundColor = "#EF6262";
        }
        outputArea.insertBefore(newArea, document.querySelector("#comment"));
        newArea.textContent = `${userInput}`;
        commentCount++;
    }
}

userSubmit.addEventListener("click", addBubble);
*/