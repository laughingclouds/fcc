// Compare Scopes of the var and let KeywordsPassed
function checkScope() {
    const strOutput = (name, val) => name + " scope is: " + val;

    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log(strOutput("Block", i));
    }
    console.log(strOutput("Function", i));
    return i;
}

// Declare a Read-Only Variable with the const Keyword
function printManyTimes(str) {
    const SENTENCE = str + " is cool!";

    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }
}

// Mutate an Array Declared with constPassed
const s = [5, 7, 2];
function editInPlace() {
    const arr = [2, 5, 7];

    for (let i = 0; i < 3; i++) {
        s[i] = arr[i];
    }
}

// Prevent Object MutationPassed
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

// Use Arrow Functions to Write Concise Anonymous FunctionsPassed
let magic = () => new Date();

// Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

const doubler = item => item * 2;
const multiplier = (item, multi) => item * multi;

// Set Default Parameters for Your Functions
const greeting = (name = "Anonymous") => "Hello " + name;
const incremet = (number, value = 1) => number + value;

// Use the Rest Parameter with Function Parameters
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}

const callBckForSum = (acc, cur) => acc + cur;
const sum = (...args) => args.reduce(callBckForSum, 0);

// Use the Spread Operator to Evaluate Arrays In-Place
let arr = [6, 89, 3, 45];
let maximus = Math.max(...arr);
//alternative solutions
let maximus = Math.max.apply(null, arr);
arr.reduce((a, b) => Math.max(a, b));

// Use Destructuring Assignment to Extract Values from Objects
const user = { name: 'John Doe', age: 34 };
const { name, age } = user; // Order does not matter

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;

// Use Destructuring Assignment to Assign Variables from Objects
const { name: userName, age: userAge } = user;
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

// Use Destructuring Assignment to Assign Variables from Arrays
// more specifically, swap values of two variables
let a = 8, b = 6;
[a, b] = [b, a];

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
let source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    const [a, b, ...arr] = list;
    return arr;
}

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = { max: 56.78, median: 34.54, min: -0.75 };
const half = ({ max, min }) => (max + min) / 2.0;

// Create Strings using Template Literals
// make use of backticks not quotes for this one
const person = { name: "First Name", age: 56 };
const greeting = `Hello my name is ${person.name}`;

// Create Strings using Template Literals
const result = {
    failure: ["no-var", "var-on-top", "linebreak"],
};
const makeList = arr => {
    const str_cr = a => `<li class="text-warning">${a}</li>`;
    const failureItems = arr.map(item => str_cr(item));
    return failureItems;
}
// a one-liner would be like this
const makeList = arr => arr.map(a => `<li class="text-warning">${a}</li>`);

// Write Concise Object Literal Declarations Using Object Property Shorthand
const getMousePosition = (x, y) => ({
    x: x,
    y: y
});
// With es6, this trims down to
const getMousePosition = (x, y) => ({ x, y });
// Write Concise Declarative Functions with ES6
const person = {
    name: "Taylor",
    sayHello() {
        return `Hello! My name is ${this.name}`;
    }
}

const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
}
// Use class Syntax to Define a Constructor Function
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
const zeus = new SpaceShuttle('Jupiter');

class Vegetable {
    constructor(veggieName) {
        this.name = veggieName;
    }
}

// Use getters and setters to Control Access to an Object
class Thermostat {
    constructor(temp) {
        this._temp = temp;
    }
    to_c = f => 5 / 9 * (f - 32);
    to_f = c => (9 * c) / 5 + 32;

    get temperature() {
        this.to_c(this._temp);
    }

    set temperature(c) {
        this._temp = this.to_f(c);
    }
}
const thermos = new Thermostat(76);

// Use export to Share a Code BlockPassed
import { add, subtract, uppercaseString, lowercaseString } from "./export_these";
add(1, 2); subtract(2, 5); uppercaseString("wadw"); lowercaseString("WADW");

import * as stringFunctions from "./export_these";