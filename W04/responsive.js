// select menu button
let button = document.querySelector('.menu-btn');
let menu = document.querySelector('nav');

// add event listener
button.addEventListener('click', toggleMenu);

// toggle menu visibility
function toggleMenu() {
    button.classList.toggle('change');
    menu.classList.toggle('hidden');
    menu.classList.toggle('dropdown');
}


// ternary operator
// nav.style.display = nav.style.display === '' ? 'flex' : '';
