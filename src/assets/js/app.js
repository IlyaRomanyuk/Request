const element = document.querySelector('#telephone');
const closeBtn = document.querySelector('.telephone-popup__close-btn');
const links = document.querySelectorAll('.header__item');
const categories = document.querySelector('.search__text');
const searchLinks = document.querySelectorAll('#search__item');
const mail = document.querySelector('#mail');
const searchInput = document.querySelector('#search__input');

viewCloseTelephonePopup = (e) => {
    const popup = document.querySelector('.telephone-popup');
    const overlay = document.querySelector('.overlay');

    popup.classList.toggle('telephone-popup-active');
    overlay.classList.toggle('overlay-active')
}

element.onclick = viewCloseTelephonePopup;
closeBtn.onclick = viewCloseTelephonePopup;

searchLinks.forEach(element => {
    element.onclick = function(e) {
        const value = this.textContent;

        const currentCategory = document.querySelector('#current-category');
        currentCategory.textContent = value;
    }
})

searchInput.oninput = function() {
    const input = document.querySelector('.search__input-result');
    const middleOverlay = document.querySelector('.middle-overlay');

    input.style.opacity = 1;

    if(!searchInput.value) {
        input.style.opacity = 0;
        middleOverlay.classList.remove('middle-overlay-active');
    } else {
        middleOverlay.classList.add('middle-overlay-active');
    }
}

mail.onclick = function(e) {
    this.lastElementChild.classList.toggle('mail-active');
    middleOverlay.classList.toggle('middle-overlay-active');
}


links.forEach(function(element) {
    element.onclick = function(e) {
        /* для всех категорий */
        document.querySelector('.menu-popup').classList.toggle('menu-popup-active')
        const smallOverlay = document.querySelector('.small-overlay');
        smallOverlay.classList.toggle('small-overlay-active');
    };
})

categories.onclick = (function(e) {
    document.querySelector('.search__select').classList.toggle('search__select-active');
})

