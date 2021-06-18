const add = (x: number, y: number) => x + y;
const subtract = (x: number, y: number) => Math.max(x, y) - Math.min(x, y);

const uppercaseString = (string: string) => string.toUpperCase();
const lowercaseString = (string: string) => string.toLowerCase();

export { add, subtract, uppercaseString, lowercaseString };

export default function (x: number, y: number) {
	return x - y;
}
