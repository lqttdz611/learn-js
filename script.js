'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this
  // this.calcAge = function() {
  //   console.log(2037 - this.birthYear);
  // };
};

const itsMe = new Person('Tinh', 2003);
console.log(itsMe);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const jack = new Person('Tuan', 1997);

console.log(jack instanceof Person);

// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jack.calcAge();

console.log(itsMe.__proto__);
console.log(itsMe.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(itsMe));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(itsMe.species, jack.species);

console.log(itsMe.hasOwnProperty('firstName'));
console.log(itsMe.hasOwnProperty('species'));
