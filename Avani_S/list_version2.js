


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



// version - 2


function linkedList(){
    o1.next = o2;
    o2.next = o3;

    return o1;
}

let start = linkedList();

function link(temp){
    while(temp !== null){
        console.log(temp.val);
        temp = temp.next;
    }
}


link(start);