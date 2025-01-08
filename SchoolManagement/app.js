let classObj = {
    "name" : "class A" ,
    "teacherName" : "Mary" ,
    "students" : [ 
        {
            "name" : "Ravi" ,
            "id" : "101" ,
            "marks" : [
                {"subject" : "English" , "mark" : 25}, 
                {"subject" : "Maths", "mark" : 48}, 
                {"subject" : "Physics", "mark" : 40}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 20}
            ]
        },
        {
            "name" : "Aju" ,
            "id" :  "102",
            "marks" : [
                {"subject" : "English" , "mark" : 35}, 
                {"subject" : "Maths", "mark" : 38}, 
                {"subject" : "Physics", "mark" : 33}, 
                {"subject" : "Chemistry", "mark" : 34},
                {"subject" : "Computer", "mark" : 30}
            ]
        },
        {
            "name" : "Mini SS" ,
            "id" : "103" ,
            "marks" : [
                {"subject" : "English" , "mark" : 12}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 18}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 40}
            ]
        },
        {
            "name" : "Binu" ,
            "id" : "104" ,
            "marks" : [
                {"subject" : "English" , "mark" : 49}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 47}, 
                {"subject" : "Chemistry", "mark" : 46},
                {"subject" : "Computer", "mark" : 50}
            ]
        }
    ]
}


function className(){
    let name = classObj.name;
    return `Name of class is ${name}`;
}

console.log(className());


function teacherName(){
    let name =  classObj.teacherName;
    return `Name of teacher is ${name}`;
}

console.log(teacherName());


function studentsName(){
    let names = [];
    for(let i = 0; i < classObj.students.length; i++){
        names.push(classObj.students[i].name);
    }
    return names;
}

console.log(studentsName());


function idsOfStudents(){
    let studentIds = [];
    classObj.students.forEach(student=> {
        studentIds.push(student.id);
    });
    return studentIds
}

console.log(idsOfStudents());


// function subjects(){
//     let subject = [];
//     for(let i = 0; i < classObj.students.length; i++){
//         subject.push(student.marks.subject)
//     }

//     return subject;
// }

// console.log(subjects())

function subjects(){
    let subject = [];
    for(let i = 0; i< classObj.students.length; i++){
        classObj.students[i].marks.forEach(mark => {
            if(!subject.includes(mark.subject)){
                subject.push(mark.subject);
            }
        })
    }
    return subject;
}

console.log(subjects());

// function subject(){
//     let subject = [];
//     for(let i = 0; i< classObj.students.length;i++){
//         for(let j = 0; j < classObj.students[i].marks.length; j++){
//             subject.push(classObj.students[i].marks[j].subject);
//         }
//     }
//     return subject;
// }

// console.log(subject())


function markOfStudent(studentName){
    for(let student of classObj.students){
        if(student.name === studentName){
            for(let mark of student.marks){
                console.log(mark.subject + ": " + mark.mark)
            }
            return;
        }
    }
    console.log("error")
}

markOfStudent("Binu");


function averageOfMark(){
    let mark = [];
}