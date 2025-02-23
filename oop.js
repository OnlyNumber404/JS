// constructor function
//exmaple

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }
}

//membuat instance dari person
const person1 = new Person('Alice',30);
const person2 = new Person('Bob',25);

console.log(person1.name);
console.log(person2.name);

person1.eat();
person2.eat();