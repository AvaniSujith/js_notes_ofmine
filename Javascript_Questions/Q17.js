// Calculate the height of a tree given its shadow length and angle of elevation.

function heightOfTree(length, angle){
    const PI = 3.14;
    // let radian = angle * ( PI / 180 );
    let angleNew = Math.tan( angle * Math.PI / 180);
    console.log(angleNew);
    let height = angleNew * length;
    console.log(height);
    
}

heightOfTree(15, 30);
heightOfTree(12,30);
heightOfTree(8,45);
