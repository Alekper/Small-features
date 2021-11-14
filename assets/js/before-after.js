let slider = document.querySelectorAll(".ba-slider input");
let img = document.querySelectorAll(".ba-images .ba-img-2");
let dragLine = document.querySelectorAll(".ba-slider .ba-drag-line");
for (let i = 0; i < slider.length; i++) {
    slider[i].oninput = () => {
        let sliderVal = slider[i].value;
        dragLine[i].style.left = sliderVal + "%";
        img[i].style.width = sliderVal + "%";
    }
}