/**
 * Created by VD on 12/30/2015.
 */

/*

let type = `grizzy`;
while (true){
    let type= `brizzy`;
    console.log(`hello ${type}`);
    break;
}
document.write(type);

for (let x = 10 ; x< 12; x++){
    document.write(x + "\n");
}
console.log(x); // REFERENCE ERROR x is not defined

{
  let b =3;
}
document.write(b); // REFERENCE ERROR x is not defined

*/

/*
let a = 2;
let i = 0;
while (a < 6)
{
    //let a=3;
    let a= 5;

    console.log('a in while -> ',a);
    a++;
}
console.log(a);*/

/*

function something() {
    console.log(x); // In ES2015 this is a Reference Error

    console.log(b); // undefined

    let x=2;
    var b =2;
    console.log(x); // 2
}

something();
*/


/*

{
    console.log(x);

    console.log(b);

    //let x=2;
    var b;
    console.log(x);
}
*/


/*

// Before:
function Fruit(size, age, colour) {
    this.size = size;
    this.age = age;
    this.colour = colour;
}

Fruit.type = function() {
    return 'This is a fruit.';
}

function Banana(size, age, colour) {
    Fruit.call(this, size, age, colour);
    this.peel = true;
}

// Still requires a recent browser for the following line
Banana.prototype = Object.create(Fruit.prototype);

Banana.prototype.open = function open() {
    this.peel = false;
}*/

/*

// After:
class Fruit {
    constructor(size, age, colour) {
        this.size = size;
        this.age = age;
        this.colour = colour;
    }

    // Class methods - static methods
    static type() {
        return 'This is a fruit.';
    }
}

class Banana extends Fruit {
    constructor(size, age, colour) {
        super(size, age, colour);
        this.peel = true;
    }

    open() {
        this.peel = false;
    }
}*/


/*
class Circle {
    constructor (radius) {
        this._radius  = radius

    }
    set radius (radius) { this._radius = radius }
    get radius () { return this._radius }
    get diameter () { return this._radius*2 }
    get area () { return Math.Pi * this._radius*this._radius }
}
var c = new Circle(50)
c.diameter === 100 // true*/

/*

const PI = 22/7;
// SOME CODE...
PI = 3;*/

/*

// Basic literal string creation
`This is a pretty little template string.`

// Multiline strings
  `In ES5 this is
 not legal.`

// Interpolate variable bindings
let name = "Faizan", relation = "mate";
`Hello ${name}, how are you ${time}?`

// Unescaped template strings
String.raw`In ES5 "\n" is a line-feed.`*/

/*

var a = "a".repeat(5);          // aaaaa
"Faizan".includes("aizan")      // true
"Faizan".includes("zan",4)      // false
"Faizan".startsWith("Faiz")     // true
"Faizan".startsWith("aiz",1)    // true
"Faizan".endsWith("an")         // true
"Faizan".endsWith("Faiz",4)     // true
"Faizan".endsWith("F",1)        // true

*/

/*

 // Expression bodies
 var odds = evens.map(v => v + 1);
 var nums = evens.map((v, i) => v + i);

 // Statement bodies
 nums.forEach(v => {
 if (v % 5 === 0)
 fives.push(v);
 });

 // Lexical this
 var bob = {
 _name: "Bob",
 _friends: [],
 printFriends() {
 this._friends.forEach(f =>
 console.log(this._name + " knows " + f));
 }
 };

 */

/*

let name = 'Arnold'
let age = 40

var obj = {
    name,
    age
}

*/

/*

var user = {name: "ABC", address: "Karachi Pakistan"};
var {name} = user;
console.log(name); // "ABC"
*/

/*

// list matching
var [a, ,b] = [1,2,3];
a === 1; // true
b === 3; //true

// Fail-soft destructuring
var [a] = [];
a === undefined;

// Fail-soft destructuring with defaults
var [a = 1] = [];
a === 1;
*/

/*

// Can be used in parameter position
function g({name: x}) {
    console.log(x);
}
g({name: 5})

*/
/*

function SetMyStatus(Me,...Guests) {
    console.log(`${Me} is enjoying with ${Guests.join(", ")}`);
}

SetMyStatus("Faizan","ABC","DEF","GHI","JKL");*/

/*


function ICantHandleUndefined(people=20, timing=Date.now()) {
    console.log(`${people} people are coming at ${timing.getTime()}`);
}


ICantHandleUndefined(30);*/
/*

// THIS IS MY SUPER MODULE
import react from 'react';
import {PI, e} from 'math';

export function SuperFunction()
{
       // Some Secret Code
};

export function AnotherSuperFunction()
{
    // Some more code here
} ;


let MySimpleObject  = {
    prop1: 1,
    prop2: "2"
}

export default MySimpleObject
*/

/*

function countTillTen(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve("Done"),10000);
    });
}

countTillTen().then((data) => {
    console.log(data);
})*/
