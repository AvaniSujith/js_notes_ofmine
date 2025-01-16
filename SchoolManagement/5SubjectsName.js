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

// version-1

// function subjectsName(){
//     let subjects = [];
//     for(let i = 0; i < classObj.students.marks.length ; i++){
//         let subject = classObj.students.marks[i];
        
//         subjects.push(subject);
//     }
//     console.log(subjects)
// }

// subjectsName();

// version-2

// function subjectsName(){
//     let subjects = [];
//     for(let i = 0; i < classObj.students.length ; i++){
//         let subject = classObj.students.marks[i];
        
//         subjects.push(subject);
//     }
//     console.log(subjects)
// }

// subjectsName();

// version-3

// function subjectsName(){
//     let subjects = [];
//     for(let i = 0; i < classObj.students.length; i++){
//         let studentMarks = classObj.students[i].marks;
//         for(let j = 0 ;j < studentMarks; j++ ){
//             let subject = studentMarks.marks[i]
//             subjects.push(subject)
//         }
//     }

//     console.log(subjects);
// }

// subjectsName()

// version-4

// function subjectsName(){
//     let subjects = [];
//     for(let i = 0; i < classObj.students.length; i++){
//         let studentMarks = classObj.students[i].marks;
//         for(let j = 0; j<studentMarks.length; j++){
//             let subject = studentMarks[i].subject;
//             subjects.push(subject);
//         } 
//     }
//     console.log(subjects);
// }

// subjectsName();

// version-5 

// function subjectsName() {
//     let subjects = [];
//     for (let i = 0; i < classObj.students.length; i++) {
//         let studentMarks = classObj.students[i].marks;
//         for (let j = 0; j < studentMarks.length; j++) {
//             let subject = studentMarks[j].subject;  
//             subjects.push(subject);
//         }
//     }
//     console.log(subjects);
// }

// subjectsName();

// version-6

function subjectOfStudent(name){
    let subjects = [];
    for(let i = 0; i < classObj.students.length; i++){
        if(classObj.students[i].name === name){
            for(let j = 0; j < classObj.students[i].marks.length; j++){
                subjects.push(classObj.students[i].marks[j].subject);
            }
            break;
        }
    }
    console.log(subjects)
}

subjectOfStudent("Binu")
