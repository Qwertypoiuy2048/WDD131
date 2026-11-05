// click button
const button = document.querySelector("#rollButton");
button.addEventListener("click", e => {
    const checkboxes = Array.from(document.querySelectorAll("#gameboard input"));

    // animate die
    dice = document.querySelectorAll("#gameboard img");
    dice.forEach(die => {
        var dieNum = die.classList[0].slice(-1);
        // console.log(checkboxes[dieNum - 1]);
        // console.log(checkboxes[dieNum - 1].checked);
        setDieImage(die, "assets/die_rolling.gif", checkboxes[dieNum-1]);});
        // land on random number
        
        setTimeout(() => {
            // runs after the timeout in MS
            dice.forEach(die => {
                var dieNum = die.classList[0].slice(-1);
                setDieImage(die, `assets/white_dice_${Math.ceil((Math.random())*6)}.gif`, checkboxes[dieNum-1]);
                // console.log(die);
        die.classList.contains
    })
    }, 1000);
});

function setDieImage(die, path, box){
    if (!box.checked) {
        die.src = path;
}
}
