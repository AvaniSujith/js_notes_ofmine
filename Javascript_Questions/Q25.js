// ckeck if a year is leap year or not 

function leap(year){
    if(year%4 == 0 || year%400 == 0){
        console.log(`${year} is leap year`);
    }else{
        console.log(`${year} is not leap year`);
    }
}

leap(2024);
leap(1900);
leap(2025);