const respList = document.querySelector(".resp");
const menuBar = document.querySelector(".fa-bars");

menuBar.addEventListener("click", () => {
    respList.classList.toggle("closed");
})