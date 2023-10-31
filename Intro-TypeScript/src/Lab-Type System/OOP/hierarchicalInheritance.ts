class Animal {
    eating: string;

    constructor(eating: string) {
        this.eating = eating;
    }
    eat():void {
        console.log('eating...');
    }
}

class Dog extends Animal {
    bark() {
        return `barking...`
    }
}

class Cat extends Animal {
    meow() {
        return `meowing...`
    }
}

let mammal = new Animal('');

console.log(mammal.eat());



