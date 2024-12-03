let navBar = document.querySelector(".nav-bar");

function openMenu (){
    console.log("open!");
    navBar.style.width = "40%"; 
    navBar.style.opacity = "1"; 
}

function closeMenu (){
    console.log("close!");
    navBar.style.width = "0%"; 
    navBar.style.opacity = "0"; 
}
window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
        // Clear inline styles for desktop view
        navBar.style.width = "";
        navBar.style.opacity = "";
    }
});
