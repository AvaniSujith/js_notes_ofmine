// Convert seconds into hours, minutes, and seconds.

function conversion(seconds){
   
    let minutes = seconds / 60;
    // let hours = minutes /60;
    let hours = seconds / 3600;

    console.log(`${seconds} = ${hours} hours and ${minutes} minutes`);

}

conversion(7500);
conversion(50050);