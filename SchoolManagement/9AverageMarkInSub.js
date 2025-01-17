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


// function averageMarks(sub){
//     let marks = 0;
//     for(let i = 0; i < classObj.students.marks.length; i++){
//         if(classObj.students.marks[i].subject === sub){
//             let mark = classObj.students.mark[i].mark
//             marks += mark
//         }
//     }

//     console.log(marks)
// }

// averageMarks("Maths")


// version-2


// function averageMarks(sub){
//     let totalMarks = 0;
//     let avg = 0;
//     let students = classObj.students.length;

//     for(let i = 0; i<students; i++){
//         let marks = classObj.students[i].marks;

//         for(let j = 0; j < marks.length; j++){
//             if(marks[j].subject === sub){
//                 totalMarks += marks[j].mark;
//                 avg = totalMarks / students;
//             }
//         }
//     }

//     return avg;

// }

// console.log(averageMarks("Maths"))


// version - 3 

function averageMarks(sub){
    let totalMarks = 0;
    let students = classObj.students.length;

    for(let i = 0; i < students; i++){
        let marks = classObj.students[i].marks;

        for(let j = 0; j < marks.length; j++){
            if(marks[j].subject === sub){
                totalMarks += marks[j].mark;
            }
        }
    }
    
    return totalMarks / students

}

// console.log(averageMarks("Maths"));

function testCases(){
    let input = ["Maths", "English", "Physics", "Chemistry", "Hindi"];
    let output = [46, 30.25, 34.5, 35, 99];

    for(let i = 0; i < input.length; i++){
        let result = averageMarks(input[i]);

        if(result === output[i]){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed`);
        }
    }
}

testCases();