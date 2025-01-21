let o1 = {
    "val":1,
    "next":0
}

let o2 ={
    "val":2,
    "next":1
}

let o3 = {
    "val":3,
    "next":null
}


// version - 1

function linkedList(){

    o1 = start;
    start.next = o2;
    o2.next = o3;

    return o1;


}

function list(temp){
    while(temp !== null){
        console.log(temp.val);
        temp = temp.next;
    }
}

list(start);

