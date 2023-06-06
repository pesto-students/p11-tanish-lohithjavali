// By Setting writable to false
const myObject = {};
Object.defineProperty(myObject, "name", {
  value: "John",
  writable: false,
});
myObject.name = "Peter"; // This will not change the value of "name" property

// Object.freeze(myObject);
// const myObject = {
//   name: "John",
// };
// Object.freeze(myObject);
// myObject.name = "Peter"; // This will not change the value of "name" property

// Object.seal(myObject);
// const myObject = {
//   name: "John",
// };
// Object.seal(myObject);
// myObject.age = 30; // This will not add a new "age" property
// myObject.name = "Peter"; // This will change the value of "name" property

//-------------notes------------
// By Setting writable to false
const myObject = {};
Object.defineProperty(myObject, "name", {
  value: "John",
  writable: false,
});
myObject.name = "Peter"; // This will not change the value of "name" property

Object.freeze(myObject);
const myObject = {
  name: "John",
};
Object.freeze(myObject); //cannot add or change or delete property
myObject.name = "Peter"; // This will not change the value of "name" property
myObject.age = 30; // This will not add a new "age" property

Object.seal(myObject);
const myObject = {
  name: "John",
};
Object.seal(myObject); //cannot add or delete property | change allowed
myObject.age = 30; // This will not add a new "age" property
myObject.name = "Peter"; // This will change the value of "name" property
