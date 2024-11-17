// Calculate the area and circumference of a circle.


function circle(r){
    const PI = 3.14;
    let area = PI * r**2;
    let circumference = 2 * PI * r;

    console.log(`The area of circle is ${area} and the circumference is ${circumference}`);
}

circle(7);
circle(5);
circle(10);