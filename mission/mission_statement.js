
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let box = document.querySelector('#box')
let background = document.querySelector('#background')

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    console.log(`The theme is now ${current}`)
    if (current == 'dark') {
        logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-white.png"
        box.classList.add("darkBox")
        background.classList.add("dark")
        box.classList.remove("lightBox")
        background.classList.remove("light")
        // code for changes to colors and logo
        // https://wddbyui.github.io/wdd131/images/byui-logo-white.png
    } else if (current == 'light'){
        logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp"
        box.classList.add("lightBox")
        background.classList.add("light")
        box.classList.remove("darkBox")
        background.classList.remove("dark")
        // code for changes to colors and logo
        // https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp
    }
}           
