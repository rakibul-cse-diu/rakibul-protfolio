// variables 
const openMenu = document.getElementById("menu-open");
const closeMenu = document.getElementById("menu-close");
const navBar = document.querySelector(".nav-bar");
const menuItems = document.querySelector(".menu-items");


// Toggle open handle
function handleMenuOpen() {
    openMenu.style.display = "none";
    navBar.classList.remove("navbar-toggle");
}


// Toggle close handle
function handleMenuClose() {
    openMenu.style.display = "block";
    navBar.classList.add("navbar-toggle");
}