class linkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    createList(num){
        for(let i = 0; i<num ; i++){
            const node = { val : i, Id : i + 1, next: null };

            if(this.head === null){
                this.head = node;
                this.tail = node;
            }else{
                this.tail.next = node;
                this.tail = node;
            }
        }
       
    }

    addElement(list, value, Id){
        if(repeatedValue(list, value, Id)){
            console.log("Already Existing value or id");
            return;
        }

        const newNode = {val : value, Id, next:null};

        if(list.this.head === null){

            list.this.head = newNode;
            list.this.tail = newNode;

        }else if(Id <= list.this.head.Id){

            newNode.next = list.this.head;
            list.this.head = newNode;
            incrementId(list.this.head.next);

        }else{

            r
        }
    }
}