// variable
let age = 22;
// constant
const birthYear = 2004;
const name = "Evan"

console.log(age);
console.log(birthYear);

// birthYear = 2005; // This will throw an error because birthYear is a constant
// console.log(birthYear);
let favoriteColor = "blue"

if (age >= 18) {
    console.log("You are a-dolt.");
    // inside a different scope
    // inside can always reference outside
    console.log(name)
    // Variables declared inside cannot be refrenced outside
    favoriteColor = "blue"
}

console.log(favoriteColor)    // error because this is a local var

// get from html
document.querySelector("h1").style.color = favoriteColor