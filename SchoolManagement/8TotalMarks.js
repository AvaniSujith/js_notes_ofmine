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


function marksOfstudent(name){
    let totalMarks = 0;
    let flag = false;

    for(let i = 0; i < classObj.students.length;i++){
        if(classObj.students[i].name === name){
            flag = true;

            if(flag === true){
                totalNum = classObj.students[i].marks.length;
                for(let j = 0; j < totalNum; j++){
                    let mark = classObj.students[i].marks[j].mark
                    totalMarks += mark;
                }
            }

            break;
        }

  
    }
    return totalMarks;
}

// console.log(marksOfstudent("Binu"));
// console.log(marksOfstudent("Aju"))

function testCases(){
    let input = ["Binu", "Aju", "Ravi", "Mini SS", "Avani"];
    let output = [241,  170, 163, 149, 10];

    for(let i = 0; i < input.length; i++){
        let result = marksOfstudent(input[i])

        if(result === output[i]){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed`);
        }
    }
}

testCases();