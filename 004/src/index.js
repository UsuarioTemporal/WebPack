class Person{
    constructor(name){
        this.name = name
    }
    get getName(){
        return this.name;
    }
    set setName(name){
        this.name = name
    }
}

const thom = new Person('thom');
console.log(thom.getName)
thom.setName = 'asd'
console.log(thom.getName)