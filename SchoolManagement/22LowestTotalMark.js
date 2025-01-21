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


function lowestTotalMarkSub(){
    // let students = [];
    // let mark = [];
    let totals = [];

    for(let i = 0; i < classObj.students.length; i++){
        let marks = classObj.students[i].marks;

        for(let j = 0; j < marks.length; j++){
            let subject = marks[j].subject;
            let mark = marks[j].mark;

            if(!(subject in totals)){
                totals[subject] = 0;
            }

            totals[subject] += mark;
        }
    }

    let lowestMark = Infinity;
    let lowestSubject = '';

    for(let subject in totals){
        if(totals[subject] < lowestMark){
            lowestMark = totals[subject];
            lowestSubject = subject;
        }
    }

    return lowestSubject;
}

// console.log(lowestTotalMarkSub())

function testCase(){
    let output = ["English", "Maths"];

    for(let i = 0; i<output.length; i++){
        let result = lowestTotalMarkSub();

        if(result === output[i]){
            console.log("Test case passed")
        }else{
            console.log("Test case failed")
        }
    }
}
testCase()