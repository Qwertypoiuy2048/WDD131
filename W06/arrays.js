// arrays
let courses = ["131", "130", "110", "310"];

console.log(courses[0]);
console.log(courses[4]);
// console.log(courses[-1])     // does not work
// console.log(courses[^1])     // does not work
console.log(courses[courses.length - 1]);     // need to use this
console.log(courses);

for (let i = 0; i < courses.length; i++) {
    const course = courses[i];
    console.log(course);
}


// courses.forEach(console.log())

courses.forEach((item) => {
    console.log(item);
})

let course = {
    name : "Dynamic Web Fundamentals",
    code : "WDD 131",
    credits : 3,
    teacher : "Warner"
}

console.log(course.name);

let corpses = [
    {
        name: "Dynamic Web Fundamentals",
        code: "WDD 131",
        credits: 2,
        teacher: "Warner"
    },
    {
        name: "Web Fundamentals",
        code: "WDD 130",
        credits: 2,
        teacher: "Warner"
    },
    {
        name: "Classes",
        code: "CSE 131",
        credits: 3,
        teacher: "Warner"
    }
]


console.log(corpses[1].name)
console.log(corpses[1].code)


console.log(`${corpses[1].name}, ${corpses[1].code}`)


let body = document.querySelector('body')

corpses.forEach((item) =>{
    let coursediv = `
    <div>
    <h2>${item.name}</h2>
    <p>${item.code}</p>
    <p>${item.credits}</p>
    <p>${item.teacher}</p>
    </div>`

    body.innerHTML += coursediv;
})