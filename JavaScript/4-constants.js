'use strict';

// Magic numbers vs named constants

const canRetireMagic = (age) => age >= 60;

const RETIREMENT_AGE = 60;
const canRetire = (age) => age >= RETIREMENT_AGE;

// Usage

console.log(canRetireMagic(59), canRetire(59));
console.log(canRetireMagic(60), canRetire(60));
