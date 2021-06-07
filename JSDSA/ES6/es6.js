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