function createList(num){
    let head = null;
    let tail = null;

    for(let i = 0 ; i<num; i++){
        const obj = {
            val: i,
            Id : 1,
            next : null
        }

        if(head === null){
            head = obj;
            tail = obj;
        }else{
            tail.next = obj;
            obj.Id = i+1;
            tail = obj;
        }
    }

    return {head, tail}
}

console.log(createList(4));

function addElement(list, value, Id){
    const node = {val : value, next:null}

    if(list.head === null){
        head = node;
        tail = node;
    }else{
        head.next = null;
        Id = Id + 1;
        tail = head;
    }
}

function removeElement(list, id){
    if(id === list.Id){
        list.head = list.head.next;

        if(list.head === null){
            list.tail = null;
        }else{
            
        }
    }
}