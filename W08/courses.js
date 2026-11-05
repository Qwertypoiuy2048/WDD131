// make an object
const aCourse = {
    code: "WDD131",
    name: "Dynamic Web Fundamentals",
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 221',
            enrolled: 25,
            days: 'TTh',
            instructor: 'Bro W'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 231',
            enrolled: 20,
            days: 'MW',
            instructor: 'Bro W'
        }
    ],
    enrollStudent: function (sectionNum) {
        // find the section based on num passed in
        let found = false;
        this.sections.forEach (section =>{
            // console.log(section.sectionNum, sectionNum);
            if (sectionNum == section.sectionNum) {
                // increment enrollment by 1
                section.enrolled++;
                found = true;
            }
        });
        if (!found) {
            console.log("Section not found");
        }
        renderSections(this.sections);
    }
}

// log 2nt sections instructor

console.log(aCourse.sections[1].instructor);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});


function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);
