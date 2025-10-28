/*
 First name: Ehm
 Last name: Aesch
 This year: 2025
 Birth year: 1994

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
 The greeting will read: Hello! My name is Ehm Aesch and I am 31 years old. 
*/

// Add your code right below, good luck!

const birthYear = 1994;
const thisYear = 2025;
const firstName = "Ehm";
const lastName = "Aesch";

const fullName = firstName + " " + lastName;
const age = (thisYear - birthYear); 
const greeting = "Hello! My name is " + fullName + " and I am " + age + " years old."








// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age,
}
