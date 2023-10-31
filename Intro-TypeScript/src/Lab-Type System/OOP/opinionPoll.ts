class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    personInfo() {
        return `${this.name} is ${this.age} years old.`
    }
}

let personInformation = new Person('Peter', 12);

console.log(personInformation.personInfo());
