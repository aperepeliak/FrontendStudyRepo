let ob1 = {
    name: 'Andrii',
    printName() {
        console.log(`My name is ${this.name}.`);
    }
};

ob1.printName();

setTimeout(ob1.printName.bind(ob1), 1000);