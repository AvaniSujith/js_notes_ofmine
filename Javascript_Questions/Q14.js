// Write a program to determine if three sides can form a triangle.

function checkTriangle(a,b,c){
    if( a+b > c && b+c >a && a+c > b){
        console.log("The given sides form a triangle");
    }else{
        console.log("The given sides does not form a trianlge");
    }
}

checkTriangle(5,7,10);
checkTriangle(1,2,3);
checkTriangle(10,20,30);
checkTriangle(6,8,10);