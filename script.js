let selectedImage = null;

function moveUp() {
    if (selectedImage && selectedImage.previousElementSibling) {
        selectedImage.parentNode.insertBefore(selectedImage, selectedImage.previousElementSibling);
    }
}

function moveDown() {
    if (selectedImage && selectedImage.nextElementSibling) {
        const nextSibling = selectedImage.nextElementSibling;
        selectedImage.parentNode.insertBefore(nextSibling, selectedImage);
    }
}

function changeWidth() {
    if (selectedImage) {
        const newWidth = prompt("Введіть нову ширину (в px):", selectedImage.width);
        if (newWidth !== null && !isNaN(newWidth)) {
            selectedImage.style.width = newWidth + "px";
        }
    }
}

function changeHeight() {
    if (selectedImage) {
        const newHeight = prompt("Введіть нову висоту (в px):", selectedImage.height);
        if (newHeight !== null && !isNaN(newHeight)) {
            selectedImage.style.height = newHeight + "px";
        }
    }
}

function changeBorder() {
    if (selectedImage) {
        const newBorder = prompt("Введіть нову товщину рамки (в px):", selectedImage.style.borderWidth);
        if (newBorder !== null && !isNaN(newBorder)) {
            selectedImage.style.borderWidth = newBorder + "px";
        }
    }
}

function changeAltText() {
    if (selectedImage) {
        const newAltText = prompt("Введіть новий альтернативний текст:", selectedImage.alt);
        if (newAltText !== null) {
            selectedImage.alt = newAltText;
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery img");

    images.forEach(function (image) {
        image.addEventListener("click", function () {
            if (selectedImage) {
                selectedImage.classList.remove("selected");
            }
            selectedImage = image;
            selectedImage.classList.add("selected");
        });
    });
});
