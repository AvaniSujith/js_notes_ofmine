// class Objects{
//     constructor(value,next){
//         this.value = value;
//         this.next = next
//     }

//     createNode(){
//         cre
//     }
// }


class List{
    constructor(num){
        this.first = null;
        this.end = null;

        for(let i = 0; i< num; i++){
            this.addElement(i);
        }
    }

    addElement(value){

        const newNode ={ val: value, next:null };
        if(!list.first){
            list.first = newNode;
            list.end = newNode;
        }else{
            list.end.next = newNode;
            list.end = newNode
        }
        
    }

    removeElement(){
        if(!this.first){
            return null;
        }

        const removedValue = this.first.val;
        this.first = this.first.next;

        if(!this.head){
            this.end = null;
        }
        return removedValue;
    } 

    find(value){
        let current = this.first;

        while(current){
            if(current.val === value){
                return true;
            }
            current = current.next;
        }

        return false;
    }

    listDisplay(){
        let current = this.first;

        if(!current){
            console.log("empty");
            return;
        }

        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
}


const list = new List(5);
list.listDisplay();

console.log("After adding")
list.addElement(22)
list.listDisplay();

console.log("removed")
list.removeElement();
list.listDisplay();

console.log(linkedList.find(4));
console.log(list.find(44));