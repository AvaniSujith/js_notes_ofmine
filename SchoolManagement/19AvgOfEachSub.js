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


// function avgMarkOfSub(){
//     let subTotal = {};

//     for(let i = 0; i < classObj.students.length; i++){
//         let marks = classObj.students[i].marks;

//         for(let j = 0; j < marks.length; j++){
//             let subject = marks[i].subject;
//             let mark = marks[j].mark;

//             if(!subTotal.includes(subject)){
//                 avg[sub]
//             }
//         }
//     }
// }

// version - 2

// function avgMarkOfSub(){
//     let subTotal = {};

//     for(let i = 0; i < classObj.students.length; i++){
//         let marks = classObj.students[i].marks;

//         for (let j = 0; j < marks.length; j++) {
//             let subject = marks[j].subject;
//             let mark = marks[j].mark;

            
//             if (!(subject in subjectTotals)) {
//                 subjectTotals[subject] = [0, 0];
//             }
//             subjectTotals[subject][0] += mark; 
//             subjectTotals[subject][1] += 1;   
//         }

//     }

//     let average = {};
//     for(let subject in subTotal){
//         average[subject] = subTotal[subject][0] / subTotal[subject][1];
//     }

//     return average;
// }



// version - 3

function avgMarkOfSub(subjectName) {
    let subTotal = {}; 

   
    for (let i = 0; i < classObj.students.length; i++) {
        let marks = classObj.students[i].marks;

        for (let j = 0; j < marks.length; j++) {
            let subject = marks[j].subject;
            let mark = marks[j].mark;

           
            if (!(subject in subTotal)) {
                subTotal[subject] = [0, 0]; 
            }

           
            subTotal[subject][0] += mark;
            subTotal[subject][1] += 1;
        }
    }

    
    if (subjectName in subTotal) {
    
        let avg =  subTotal[subjectName][0] / subTotal[subjectName][1];
        return avg;

    } else {
      
        return `Not found`;
    }
}


// console.log(avgMarkOfSub("Maths"));
// console.log(avgMarkOfSub("English"));

function testCase(){
    let input = ["Maths", "English", "Malayalam"];
    let output = [46, 30.25, 70];

    for(let i = 0; i < input.length; i++){
        let result = avgMarkOfSub(input[i]);

        if(result === output[i]){
            console.log("Test case passed")
        }else{
            console.log("Test case failed")
        }
    }
}

testCase()