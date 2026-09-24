// Functions
nameOfFunction();
function nameOfFunction(name="friend"){
    // console.log("Hello Functions");
    console.log(`Hello ${name}`)
}
function changeTheme(event){
    console.log(event)
    console.log(`hello ${event}`)
    console.log(`You picked ${event.target.value}`)

}

// call function
// I Invoke the function
nameOfFunction("Evan");
nameOfFunction("");

//        ``` Codeblock in discord```

// event listeners
    // grab a dom event to listen to
let selectBox = document.querySelector("#theme-select")
    // regester event listener -> waits for event then invokes function
selectBox.addEventListener("change",changeTheme)






let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}
          
// if statements

