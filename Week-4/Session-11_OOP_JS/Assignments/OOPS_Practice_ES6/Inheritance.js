//Inheritance

class Vehicle {
    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color - color;
    }
    drive(){
        return `Driving ${this.make} ${this.model}.`
    }
}
class Car extends Vehicle {
    constructor(make, model, year, color, numSeats){
        super(make, model, year, color);
        this.numSeats = numSeats;
    }
}
class RideShareCar extends Car {
    constructor(make, model, year, color, numSeats, isAvailable){
        super(make, model, year, color, numSeats);
        this.isAvailable = isAvailable;
    }
}

const vehicle = new Vehicle("Tesla", "model s", 2016, "White")
console.log(vehicle.drive());
const car = new Car("Ford", "Mustang GT", 2020, "Blue");
console.log(car.drive());
const rideShareCar = new RideShareCar("Tayota", "Innova Crysta", 2023, "Gray");
console.log(rideShareCar.drive());