"use strict";
class Animal {
    constructor(eating) {
        this.eating = eating;
    }
    eat() {
        return 'eating...'
    }
}
class Dog extends Animal {
    bark() {
        return `barking...`;
    }
}
class Cat extends Animal {
    meow() {
        return `meowing...`;
    }
}
let mammal = new Animal();

console.log(mammal.eat());
