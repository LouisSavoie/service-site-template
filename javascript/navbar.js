// SELECT HTML
const toggler = document.querySelector('#nav-toggler');
const nav = document.querySelector('nav');
const navbar = document.querySelector('header');

// TOGGLE FUNCTION
function toggleNav() {
    nav.classList.toggle('nav-active');
}

// CALL TOGGLE ON CLICK
toggler.addEventListener('click', function() {
    toggleNav();
});

// CHANGE BACKGROUND ON SCROLL
window.onscroll = function () {
    if (document.body.scrollTop >= 70  || document.documentElement.scrollTop >= 70) {
        navbar.classList.add("nav-colored");
        navbar.classList.remove("nav-transparent");
    } 
    else {
        navbar.classList.add("nav-transparent");
        navbar.classList.remove("nav-colored");
    }
};