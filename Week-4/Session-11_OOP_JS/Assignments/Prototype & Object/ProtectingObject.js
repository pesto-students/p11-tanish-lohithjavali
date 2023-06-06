// Prototype & Object
//Protecting the Object, JavaScript Prototype

const person = {
    name : "Elon",
    age : 45,
    email : "x@tesla.com",
}

Object.defineProperty(person, "name", {
    writable: false,
})
Object.defineProperty(person, "email", {
    writable: false,
})
Object.defineProperty(person, "age", {
    writable: true,
    enumerable: true,
})

person.setAge = function(age){
    this.age = age;
}
person.getAge = function(){
    return this.age;
}

person.setAge(51);
console.log(person.getAge())
console.log(person);


