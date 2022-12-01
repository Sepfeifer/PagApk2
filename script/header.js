window.addEventListener("scroll", function (){
    var header = document.querySelector(".header");
    var body = document.querySelector(".app-main");
    header.classList.toggle("scroll", window.scrollY > 0);
    body.classList.toggle("body-scroll", window.scrollY > 0);
})