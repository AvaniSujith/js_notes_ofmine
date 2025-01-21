class Product{
    constructor(name, price){
        this.name = name;
        this.price = price
    }


    display(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`)
    }
}

const product1 = new Product("shirt", 13);

product1.display()

class Student{
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    display(){
        console.log(`name: ${this.name}`);
        console.log(this.age)
    }
}

const student1 = new Student("avani", 23);
student1.display()