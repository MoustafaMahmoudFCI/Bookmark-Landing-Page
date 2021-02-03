// show mobile menu 
const toggleBtn = document.querySelector('#nav-toggle');
const header = document.getElementById('header');

function toggleIcon() {
    if (header.classList.contains('open-menu')) {
        toggleBtn.firstElementChild.classList.remove('icofont-navigation-menu');
        toggleBtn.firstElementChild.classList.add('icofont-close');
    } else {
        toggleBtn.firstElementChild.classList.add('icofont-navigation-menu');
        toggleBtn.firstElementChild.classList.remove('icofont-close');
    }

}

function showMobileMenu() {
    const menu = document.querySelector('#nav-menu'),
        overlay = document.querySelector('.overlay');

    header.classList.toggle('open-menu');
    menu.classList.toggle('show-menu');
    overlay.classList.toggle('show');
    toggleIcon();
}
toggleBtn.addEventListener('click', showMobileMenu);