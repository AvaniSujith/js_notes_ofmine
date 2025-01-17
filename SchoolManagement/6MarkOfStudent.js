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

// function marksOfstudent(name){

//     let marks = [];
//     for(let i = 0; i < classObj.students.length; i++){
//         if(classObj.students[i].name === name){
//             for(let j = 0; j < classObj.students[i].marks.length; j++){
//                 let mark = classObj.students[i].marks[j].mark;
//                 marks.push(mark);
//             }
//         }
//         else{
//             console.log("student not found")
//         }
//     }

//     console.log(marks)
// }

// marksOfstudent("Binu");

// version-2 


// function marksOfstudent(name){
//     let marks = [];
//     let flag = false;

//     for(let i = 0; i < classObj.students.length;i++){
//         if(classObj.students[i].name === name){
//             flag = true;
//             break;
//         }

//         if(flag === true){
//             for(let j = 0; j < classObj.students[i].marks.length; j++){
//                 let mark = classObj.students[i].marks[j].mark
//                 marks.push(mark)
//             }
//         }
//     }

//     console.log(marks)
// }

// marksOfstudent("Binu")


// version-3


// function marksOfstudent(name){
//     let marks = [];
//     let flag = false;

//     for(let i = 0; i < classObj.students.length;i++){
//         if(classObj.students[i].name === name){
//             flag = true;

//             if(flag === true){
//                 for(let j = 0; j < classObj.students[i].marks.length; j++){
//                     let mark = classObj.students[i].marks[j].mark
//                     marks.push(mark)
//                 }
//             }

//             break;
//         }

  
//     }

//     // console.log(marks)
//     return marks;
// }

// // marksOfstudent("Binu");
// // marksOfstudent("Aju");
// // marksOfstudent("Ravi");
// // marksOfstudent("Mini SS")

// function testCases(){
//     let input = ["Binu", "Aju", "Ravi", "Mini SS", "Avani"];
//     let output = [[ 49, 49, 47, 46, 50 ], 
//                   [ 35, 38, 33, 34, 30 ],
//                   [ 25, 48, 40, 30, 20 ],
//                   [ 12, 49, 18, 30, 40 ],
//                   [ 12, 49, 18, 30, 40 ] ];

//     for(let i = 0; i<input.length; i++){
//         if(JSON.stringify(marksOfstudent(input[i])) === JSON.stringify(output)){
//             console.log(`Test case ${i+1} passed`);
//         }else{
//             console.log(`Test case ${i+1} failed`);
//         }
//     }
// }

// testCases()


// verison-4



function marksOfstudent(name){
    let marks = [];
    let flag = false;

    for(let i = 0; i < classObj.students.length;i++){
        if(classObj.students[i].name === name){
            flag = true;

            if(flag === true){
                for(let j = 0; j < classObj.students[i].marks.length; j++){
                    let mark = classObj.students[i].marks[j].mark
                    marks.push(mark)
                }
            }

            break;
        }

  
    }
    return marks;
}


function testCases(){
    let input = ["Binu", "Aju", "Ravi", "Mini SS", "Avani"];
    let output = [[ 49, 49, 47, 46, 50 ], 
                  [ 35, 38, 33, 34, 30 ],
                  [ 25, 48, 40, 30, 20 ],
                  [ 12, 49, 18, 30, 40 ],
                  [ 12, 49, 18, 30, 40 ] ];

    for(let i = 0; i<input.length; i++){
        let result = marksOfstudent(input[i]);
        if(JSON.stringify(result) === JSON.stringify(output[i])){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed`);
        }
    }
}

testCases()