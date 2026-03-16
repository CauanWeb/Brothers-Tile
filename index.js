const slide_menu = document.querySelector(".slide_menu");
const menu = document.querySelector(".menu");

menu.onclick = () =>{
    slide_menu.classList.toggle("active");
    menu.classList.toggle("active")
}