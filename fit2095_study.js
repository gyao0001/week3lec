const circle = require('./circle.js');
console.log('The area of a circle or radius 4 is ${circle.area(4)}');

const Square = require('./square.js');
const mySquare = new Square(2);
console.log(`The area of mySquare is ${mySquare.area()}`);

const http = require('http');
const fs = require('fs');

