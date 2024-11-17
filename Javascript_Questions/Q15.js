
// Calculate the surface area and volume of a cylinder.

function cylinder(r,h){
    const PI = 3.14;
    let surfaceArea = 2 * PI * r**2 + 2 * PI * r * h;
    let volume =PI * r**2 * h;

    console.log(`The surface area is ${surfaceArea} and volume is ${volume}`);
}

cylinder(4,10);
cylinder(10,12);
cylinder(2,3);