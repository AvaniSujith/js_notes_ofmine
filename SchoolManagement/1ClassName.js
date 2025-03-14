let classObj = {
    "name": "class A",
    "teacherName": "Mary",
    "students": [
        {
            "name": "Ravi",
            "id": "101",
            "marks": [
                { "subject": "English", "mark": 25 },
                { "subject": "Maths", "mark": 48 },
                { "subject": "Physics", "mark": 40 },
                { "subject": "Chemistry", "mark": 30 },
                { "subject": "Computer", "mark": 20 }
            ]
        },
        {
            "name": "Aju",
            "id": "102",
            "marks": [
                { "subject": "English", "mark": 35 },
                { "subject": "Maths", "mark": 38 },
                { "subject": "Physics", "mark": 33 },
                { "subject": "Chemistry", "mark": 34 },
                { "subject": "Computer", "mark": 30 }
            ]
        },
        {
            "name": "Mini SS",
            "id": "103",
            "marks": [
                { "subject": "English", "mark": 12 },
                { "subject": "Maths", "mark": 49 },
                { "subject": "Physics", "mark": 18 },
                { "subject": "Chemistry", "mark": 30 },
                { "subject": "Computer", "mark": 40 }
            ]
        },
        {
            "name": "Binu",
            "id": "104",
            "marks": [
                { "subject": "English", "mark": 49 },
                { "subject": "Maths", "mark": 49 },
                { "subject": "Physics", "mark": 47 },
                { "subject": "Chemistry", "mark": 46 },
                { "subject": "Computer", "mark": 50 }
            ]
        }
    ]
}

// fetch('data.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     console.log(data.name);
//   })
// .catch(error =>  console.log('Error loading', error));

function className() {
    let name = classObj.name;
    return name;
}

function testCases() {
    let input = [classObj, classObj];
    let output = ["class A", undefined];

    for (let i = 0; i < input.length; i++) {
        let result = className(input[i]);
        if (result === output[i]) {
            console.log(`Test case ${i + 1} passed`);
        } else {
            console.log(`Test case ${i + 1} failed`);
        }
    }
}

testCases();


