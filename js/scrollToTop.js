const scroller = document.querySelector("#parallaxWrapper");
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

scroller.addEventListener("scroll", (event) => {
    if (scroller.scrollTop > 600) {
        scrollToTopBtn.classList.add('active');
    } else {
        scrollToTopBtn.classList.remove('active');
    }
});

function topFunction() {
    var myDiv = document.getElementById("parallaxWrapper");
    myDiv.scrollTop = 0;
}

