const add = (x, y) => x + y;
const subtract = (x, y) => Math.max(x, y) - Math.min(x, y);

const uppercaseString = string => string.toUpperCase();
const lowercaseString = string => string.toLowerCase();

export { add, subtract, uppercaseString, lowercaseString };