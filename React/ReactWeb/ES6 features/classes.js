class Person {

    constructor(name = 'Anonymous', age = 18) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `hello! My name is ${this.name}`;
    }

    printDescription() {
        return `${this.name} is ${this.age} years old`;
    }

    toString() {
        return JSON.stringify(this);
    }
}

class Child extends Person {
    constructor(name, age, like) {
        super(name, age);
        this.like = like;
    }

    getGreeting() {
        return `Hiiii! I'm ${this.name} and I like ${this.like}`;
    }
}

let me = new Person('Andrew');
let c1 = new Child('Mke', 4, 'cars');

console.log(c1.getGreeting());