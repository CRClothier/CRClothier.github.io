const menuBtn = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu-bar');
const menuList = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', showMenu);

function showMenu(){
    menuBtn.classList.toggle('is-active');
    menuBar.classList.toggle('is-active');
    menuList.classList.toggle('is-active');
}

const linkText = document.getElementById('link-text');
const userLanguage = navigator.language || navigator.userLanguage; // Fallback for compatibility

// Check if British English is preferred
if (userLanguage.startsWith('en-GB')) {
  linkText.textContent = 'CV';
} else {
  linkText.textContent = 'Resume';
}