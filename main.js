// variables 
const openMenu = document.getElementById("menu-open");
const closeMenu = document.getElementById("menu-close");
const menuItems = document.getElementById("menu-items");
const preLoader = document.querySelector(".preloader");



// On load preloader handle 
function handlePreLoader() {
    preLoader.style.display = "none";
}



// Toggle open handle
function handleMenuOpen() {
    menuItems.style.right = "0px";
}


// Toggle close handle
function handleMenuClose() {
    menuItems.style.right = "-3000px";
}