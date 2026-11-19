// APIs are Asynchronous

async function getCatFact(){
    const url = "https://catfact.ninja/fact";
    const response = await fetch(url);
    const data = await response.json()
    console.log(response);
    console.log(data);
    console.log(data.fact);

    displayFact(data.fact)

}

document.querySelector("button").addEventListener("click", e => {
    getCatFact();
})

function displayFact(fact){
    document.querySelector("section").innerHTML += `<p>${fact}</p>`
}
