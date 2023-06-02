//"this" keyword in JS OOPs

class Person {
    constructor(name, age, gender, nationality){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }
    introduce() {
        return `My Name is ${this.name}, I'm ${this.age} old, I'm ${this.gender}, I'm ${this.nationality}.`
    }
}

const person1 = new Person("Das", 25, "Male", "Indian");
const person2 = new Person("Rahul", 24, "Male", "Indian");
const person3 = new Person("Neeraj", 23, "Male", "Indian");

console.log(person1.introduce())
console.log(person2.introduce())
console.log(person3.introduce())

class Student extends Person {
    constructor(name, age, gender, nationality, subject) {
        super(name, age, gender, nationality);
        this.subject = subject;
    }
    study() {
        return `I'm studying ${this.subject}.`
    }
}

const student1 = new Student("Anup", 22, "Male", "Indian", "Maths")

console.log(student1.introduce(), student1.study());

