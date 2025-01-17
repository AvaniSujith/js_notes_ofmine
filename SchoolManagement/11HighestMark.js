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

// function highestMark(sub){
//     let maxMark = 0;
//     // let student = '';

//     for(let i = 0; i < classObj.students.length; i++){
//         let marks = classObj.students[i].marks;
//         let student = classObj.students[i].name;


//         for(let j = 0; j < marks.length; j++){
//             if(classObj.marks[j].subject === sub){
//                 if(maxMark < marks[j].mark){
//                     maxMark = marks[j].mark;
//                     student = classObj.students[j].name
//                 }
//             }
//         }
//     }

//     return student;
// }

// console.log(highestMark("Maths"))


// version - 2

// function highestMark(sub){
//     let maxMark = 0;
//     let student = '';

//     for(let i = 0; i < classObj.students.length; i++){
//         let marks = classObj.students[i].marks;


//         for(let j = 0; j < marks.length; j++){
//             if(marks[j].subject === sub){
//                 if(maxMark < marks[j].mark){
//                     maxMark = marks[j].mark;
//                     student = classObj.students[i].name
//                 }
//             }
//         }
//     }

//     return student;
// }

// console.log(highestMark("Maths"))


// version - 3

// function highestMark(sub){
//     let maxMark = 0;
//     let students = [];

//     for(let i = 0; i < classObj.students.length; i++){
//         let marks = classObj.students[i].marks;


//         for(let j = 0; j < marks.length; j++){
//             if(marks[j].subject === sub){
//                 if(i === 0){
//                     maxMark = marks[j].mark;
//                 }
//                 break;
//             }
//         }
//     }

//     for(let i = 0; i< classObj.students.length; i++){
//         let marks = classObj.students[i].marks;
//         for(let j = 0; j < marks.length; j++){
//             if(marks[j].mark > maxMark){
//                 maxMark = marks[j].mark;
//                 students = [classObj.students[i].name];
//             }
//             else if(marks[j].mark ===  maxMark){
//                 students.push(classObj.students[i].name);
//             }
//         }
//     }
//     return students;
// }

// console.log(highestMark("Maths"))


// version- 4

function highestMark(sub){
    let maxMark = 0;
    let students = [];

    for(let i = 0; i < classObj.students.length; i++){
        let marks = classObj.students[i].marks;
        for(let j = 0; j < marks.length; j++){
            if(marks[j].subject === sub){
                maxMark = marks[j].mark;
                break;
            }
        }
        if(maxMark > 0) break;
    }

    for(let i = 0; i < classObj.students.length; i++){
        let marks = classObj.students[i].marks;
        for(let j = 0; j < marks.length; j++){
            
                if(marks[j].subject === sub){
                    if(marks[j].mark > maxMark){
                        maxMark = marks[j].mark;
                        students = [classObj.students[i].name];
                    }else if(marks[j].mark === maxMark){
                        students.push(classObj.students[i].name)
                    }
                }
        }
    }
    return students;
}


function testCases(){
    let input = ["Maths", "Biology", "English", "Physics", "Computer"];
    let output = [
        ['Mini SS', 'Binu'],  
        ['Binu'],                    
        ['Binu'],             
        ['Binu'],              
        ['Binu']               
    ];


    for(let i = 0;  i < input.length; i++){
        let result = JSON.stringify(highestMark(input[i]));

        if(result === JSON.stringify(output[i])){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed`);
        }
    }
}

testCases();