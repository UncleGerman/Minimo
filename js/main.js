
let slideIndex = 1;

showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {

    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function(event) { 
    const forms = document.getElementById("forms");

    function FormCleaner (forms)
    {
        let inputs = forms.getElementsByTagName('input');
        let inputs_value = null;

        for (let input of inputs) 
        {
            input.addEventListener('focus', (event) => {
                inputs_value = event.target.value;
                event.target.value = "";
            }, true);

            input.addEventListener('blur', (event) => {
                event.target.value = inputs_value;
            }, true);
        }
    }

    FormCleaner(forms);
});