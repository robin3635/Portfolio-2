const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const navlist = document.querySelector(".navlist");

menu.addEventListener("click", () => {
    navlist.classList.add("toggle");

    close.addEventListener("click", () => {
        navlist.classList.remove("toggle");
    });
});