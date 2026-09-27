let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    console.log("MENU CLICKED");

    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};