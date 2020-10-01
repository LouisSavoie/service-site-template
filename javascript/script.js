// SELECT HTML
const toggler = document.querySelector('#nav-toggler');
const nav = document.querySelector('nav');
const navbar = document.querySelector('header');
const toplink = document.querySelector('#toplink');
const topinfo = document.querySelector('#topinfo');

// NAV TOGGLE
function toggleNav() {
    nav.classList.toggle('nav-active');
}

// CALL NAV TOGGLE ON CLICK
toggler.addEventListener('click', function() {
    toggleNav();
});

// ON SCROLL EVENT
window.onscroll = function () {
    // SCROLL DOWN FROM TOP
    if (document.body.scrollTop >= 70  || document.documentElement.scrollTop >= 70) {
        // NAVBAR BACKGROUND
        navbar.classList.add("nav-colored");
        navbar.classList.remove("nav-transparent");
        // TOPLINK DISPLAY
        toplink.classList.remove("off");
        toplink.classList.add("on");
        // TOPINFO DISPLAY
        topinfo.classList.remove("on");
        topinfo.classList.add("off");
    } 
    // SCROLL TO TOP
    else {
        // NAVBAR NO BACKGROUND
        navbar.classList.add("nav-transparent");
        navbar.classList.remove("nav-colored");
        // TOPLINK DISPLAY NONE
        toplink.classList.add("off");
        toplink.classList.remove("on");
        // TOPINFO DISPLAY NONE
        topinfo.classList.add("on");
        topinfo.classList.remove("off");
    }
};