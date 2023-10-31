class Car {
    Brand: string;
    Model: string;
    Horsepower: number;
    constructor(Brand: string, Model: string, Horsepower: number) {
        this.Brand =Brand;
        this.Model = Model;
        this.Horsepower = Horsepower;
    }
    CarInfo() {
        return `The car is: ${this.Brand} ${this.Model} - ${this.Horsepower} HP.`
    }
}

let car = new Car('Chevrolet', 'Impala', 390);


console.log(car.CarInfo());
