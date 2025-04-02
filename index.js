const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// when someone clicks hamburger menu
navToggle.addEventListener("click", () => {
    // if the menu is closed, open it 
    const visibility = nav.getAttribute("data-visible");
    console.log(visibility)
    // if the menu is open, close it
})