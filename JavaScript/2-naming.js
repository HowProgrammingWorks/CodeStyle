'use strict';

// Prefer intention-revealing names over abbreviations

const calc = (a, b, c) => a * b + c; // unclear

const priceWithTax = (unitPrice, quantity, tax) =>
  unitPrice * quantity + tax;

// Usage

console.log(calc(10, 3, 2));
console.log(priceWithTax(10, 3, 2));
