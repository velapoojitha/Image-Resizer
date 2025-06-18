let imageElement = document.getElementById("image");
let message = document.getElementById("warningMessage");
let width = document.getElementById("imageWidth");

let originalImageWidth = 200;
let maxImage = 300;
let minImage = 100;


imageElement.style.width = originalImageWidth + "px";
width.textContent = originalImageWidth + "px";


function onIncrement() {
    if (originalImageWidth >= maxImage) {
        message.textContent = "Too big. Decrease the size of the Image.";
    } else {
        originalImageWidth = originalImageWidth + 5;
        message.textContent = "";
        imageElement.style.width = originalImageWidth + "px";
        width.textContent = originalImageWidth + "px";

    }

}

function onDecrement() {
    if (originalImageWidth <= minImage) {
        message.textContent = "can't visible. Increase the size of the Image.";
    } else {
        originalImageWidth = originalImageWidth - 5;
        message.textContent = "";
        imageElement.style.width = originalImageWidth + "px";
        width.textContent = originalImageWidth + "px";

    }

}