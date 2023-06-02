// call, bind, apply

class Calculator {
    add(a,b){
        return a+b;
    }
    subtract(a,b){
        return a - b
    }
    multiply(a,b){
        return a * b
    }
    divide(a,b){
        return a / b
    }
 }

class ScientificCalculator extends Calculator {
    square(a){
        return Math.sqrt(a);
    }
    cube(a){
        return Math.cube(a);
    }
    power(a,b){
        return Math.pow(a,b);
    }
 }
const calc = new Calculator();
const sCalc = new ScientificCalculator();
console.log(sCalc.add.call(calc,10,5))
console.log(sCalc.subtract.apply(calc,[10,2]))
let multiplyByTwo = sCalc.multiply.bind(calc,5,2)
console.log(multiplyByTwo())
let powerOfThree = sCalc.power.bind(calc,2,3)
console.log(powerOfThree())
