const navToggle = document.querySelector(".burguer")
const navMenu = document.querySelector(".allMenu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu_visible")
})

