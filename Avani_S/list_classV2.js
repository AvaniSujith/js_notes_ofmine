class Node{
    constructor(value){
        this.head = value,
        this.end = null
    }
}


class List{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1
    }
}

const list = new List(2);
console.log(list);