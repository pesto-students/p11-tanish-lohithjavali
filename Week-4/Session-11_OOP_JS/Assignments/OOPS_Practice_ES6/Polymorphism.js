//polymorphism

class Shape {
    calculateArea(){
        return "Area Calculator method"
    }
}
class Rectangle extends Shape {
    constructor(width,height) {
        super()
        this.width = width;
        this.height = height;
    }
    calculateArea(){
        let area = this.width * this.height
        return `Area: ${area} sq units`
    }
}
class Triangle extends Shape {
    constructor(base,height) {
        super()
        this.base = base;
        this.height = height;
    }
    calculateArea(){
        return `Area: ${(this.base * this.height)/2} sq units`
    }
}
class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius;
    }
    calculateArea(){
        return `Area: ${( Math.PI *this.radius * this.radius).toFixed(2)} sq units`
    }
}

const rectangle = new Rectangle(5,5);
console.log(rectangle.calculateArea());
const triangle = new Triangle(3,5)
console.log(triangle.calculateArea());
const circle = new Circle(4);
console.log(circle.calculateArea());