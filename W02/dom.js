// select html from DOM
document.querySelector("#topics")

//  save to local var called heading
let heading = document.querySelector("h1")

// log for fun
console.log(heading)

heading.style.color = "blue";
heading.style.fontSize = "3em";

heading.style.background = "white";
heading.style.border = "dashed black";
heading.style.textDecoration = "underline";

// all in one line
document.querySelector("p").style.color = "blue";

// different ways to select
document.getElementById("topics");  // no # needed because it is already id

// select more than one at a time
console.log(document.querySelectorAll(".list"));


// Classes
document.querySelector("#topics").className

const topicsclasslist = document.querySelector("#topics").classList
topicsclasslist.add("special")
topicsclasslist.toggle("special")


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    heading.textContent = codeValue;
})
                






// self test
let listItems = document.querySelectorAll("li");
console.log(listItems);

listItems.forEach(element => {console.log(element)
    
});