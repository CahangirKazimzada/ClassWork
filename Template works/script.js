const menuIcon = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const closeIcon = document.querySelector(".fa-x");
const opacity = document.querySelector(".opacity");

menuIcon.addEventListener("click", () => {
    sidebar.style.width = "500px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
})
closeIcon.addEventListener("click", () => {
    sidebar.style.width = "0";
    document.body.style.backgroundColor = "white";
})