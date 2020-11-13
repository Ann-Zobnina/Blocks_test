
let closeBtn = document.getElementsByClassName('warning__close-btn');
let textBlock = document.getElementsByClassName('text__item');
let popup = document.getElementsByClassName('popup')[0];
let i;

for (i = 0; i < textBlock.length; i++) {
    textBlock[i].onclick = function() {
        let newWarning = document.createElement("div");
        newWarning.className = 'warning warning--red';
        newWarning.innerHTML = '<span class="warning__close-btn" onclick="this.parentElement.style.display=\'none\';">&times;</span>' + this.textContent;
        document.getElementsByTagName('body')[0].insertAdjacentElement('afterBegin', newWarning);
    }
}

let img = document.getElementsByClassName('img')[0];
img.height = img.height / 2;

img.addEventListener('click', function() {
    let popupImg = document.getElementsByClassName('popup__img')[0];
    let maxParam;
    popupImg.height <= popupImg.width ? maxParam = 'width' : maxParam = 'height';
    console.log(maxParam);

    popupImg.maxParam = Math.min(popupImg.maxParam, screen.maxParam * 0.9);
    popup.style.display = 'block';
});

popup.addEventListener('click', function() {
    popup.style.display = 'none';
});