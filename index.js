 let slideIndex = 1;
showSlide(slideIndex);

// Manual controls
function changeSlide(n){
    showSlide(slideIndex += n);
    resetAutoSlide();
}

// Display logic
function showSlide(n){
    let slides = document.getElementsByClassName("slide");

    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// Auto slide every 5 seconds
let autoSlide = setInterval(() => {
    showSlide(slideIndex += 1);
}, 5000);

// Reset timer when user clicks buttons
function resetAutoSlide(){
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        showSlide(slideIndex += 1);
    }, 5000);
}