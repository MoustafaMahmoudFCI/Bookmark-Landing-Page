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

// features 
// show tab

function removeActiveClass(ele) {
    const items = ele.parentElement.children;
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
    }
}

function showTab() {
    const elements = document.querySelectorAll('#features-header li');
    elements.forEach(ele => {
        ele.addEventListener('click', (e) => {
            removeActiveClass(e.target);
            e.target.classList.add('active');
            let itemID = e.target.getAttribute('data-id');
            let itemContent = document.querySelector(`#${itemID}`);
            removeActiveClass(itemContent);
            itemContent.classList.add('active');
        })
    })
}
showTab();

// Frequently asked question 

const faqQuestions = document.querySelectorAll('.faq__question');

function toggleAnswer() {
    const btnStatus = this.getAttribute('aria-expanded');
    for (let i = 0; i < faqQuestions.length; i++) {
        faqQuestions[i].setAttribute('aria-expanded', false);
    }
    if (btnStatus == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}
faqQuestions.forEach(item => {
    item.addEventListener('click', toggleAnswer);
})