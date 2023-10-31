"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    personInfo() {
        return `${this.name} is ${this.age} years old.`;
    }
}
let personInformation = new Person('Peter', 12);
console.log(personInformation.personInfo());
