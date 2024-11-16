// Question - Calculate the percentage increase or decrease between two numbers.

// version-3.1

// let orgNumber = Number(prompt("Enter the original number"));
// let newNumber = Number(prompt("Enter the new number"));


function percentageCalc(orgNumber, newNumber){
    if(orgNumber < newNumber){
        let num = newNumber - orgNumber;
        let difference = num / orgNumber ;
        let percentage = difference * 100;
        console.log(`The percentage increase is ${percentage}%`);
    }else if(newNumber < orgNumber){
        let num = orgNumber - newNumber;
        let difference = num / orgNumber;
        let percentage = difference * 100;
        console.log(`The percentage decrease is ${percentage}%`);
    }
    else{
        console.log("No difference");
    }
}

percentageCalc(100, 150);
percentageCalc(200, 160);
percentageCalc(75, 75);