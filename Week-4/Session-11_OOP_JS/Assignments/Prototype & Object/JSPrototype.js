//Prototype

//Create object using a constructor function
function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

//Add a method called getDetails() 
Vehicle.prototype.getDetails = function(){
    return `${this.make} ${this.model} ${this.year}`
}

//create subclass - Child constructor
function Car(make, model, year, numDoors){
    Vehicle.call(this, make, model, year)
        this.numDoors = numDoors;
}

//Inheritance
// Set up prototype chain to create object "cat" using Vehicle.prototype
Car.prototype = Object.create(Vehicle.prototype)
Car.prototype.constructor = Car;

//override getdetails()
Car.prototype.getDetails = function(){
    return `No. of doors : ${this.numDoors} in ${this.make} ${this.model} ${this.year}`
}

const vehicle = new Vehicle("Tesla", "Model S", 2012)
const car = new Car("Tesla", "Roadster", 2010, 4)
console.log(vehicle.getDetails());
console.log(car.getDetails());

