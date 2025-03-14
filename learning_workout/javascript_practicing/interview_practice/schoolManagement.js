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

function ClassName() {
    return classObj.name
}

console.log(ClassName(classObj));

function classTeacher() {
    return classObj.teacherName
}

console.log(classTeacher(classObj))

function studentNames() {
    // return classObj.students.name
    for (let i = 0; i < classObj.students.length; i++) {
        console.log(classObj.students[i].name)
    }
}

studentNames(classObj);

function studentIds() {
    for (let i = 0; i < classObj.students.length; i++) {
        console.log(classObj.students[i].id)
    }
}

studentIds()

function subjectsOfSpecificStudent(name) {
    for (let i = 0; i < classObj.students.length; i++) {
        if (name === classObj.students[i].name) {
            // console.log(classObj.students[i].marks[i].)
            for (let j = 0; j < classObj.students[i].marks.length; j++) {
                console.log(classObj.students[i].marks[j].subject)
            }
        }
    }
}

subjectsOfSpecificStudent("Ravi")