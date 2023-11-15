'use strict';

/*
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

console.log(itsMe.__proto__);
// Object.prototype (top of prototype chain)
console.log(itsMe.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [2, 4, 6, 7, 10, 8, 8, 4]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// Creat method extend from prototype
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('.h1');

*/

// CODING CHANGLLENGE

/*

const Cars = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Cars.prototype.accelerate = function () {
  console.log(10 + this.speed);
};

Cars.prototype.brake = function () {
  console.log(5 - this.speed);
};

const CAR1 = new Cars('BMW', 120);
const CAR2 = new Cars('Mercedes', 95);

CAR1.accelerate();
CAR1.brake();

CAR2.accelerate();
CAR2.brake();
*/

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter Melon', 1965);

const account = {
  owner: 'jonas',
  movemonets: [200, 530, 120, 300],

  get latest() {
    return this.movemonets.slice(-1).pop();
  },

  set latest(mov) {
    this.movemonets.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movemonets);
