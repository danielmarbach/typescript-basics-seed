// named function
function sumOrderNamed(price: number, quantity: number): number {
    return price * quantity;
}

let sumOrderArrow = (price: number, quantity: number): number => {
    return price * quantity;
}

let sumOrderArrowFunctionTyped: Function;
sumOrderArrowFunctionTyped = sumOrderArrow;

// or typed

let sumOrderArrowTyped: (price: number, quanity: number) => number;
sumOrderArrowTyped = (p, q) => p * q; // short and typed version of sumOrderArrow

// or declaration and implementation together
let sumOrderArrowTypedWithImplementation: (price: number, quanity: number) => number = (p, q) => p * q;

const sum = sumOrderNamed(25, 2);
const sumArrow = sumOrderArrow(25, 2);
const sumArrowTyped = sumOrderArrowTyped(25, 2);

console.log(`Total sum: ${sum}`);
console.log(`Total sum (arrow): ${sumArrow}`);
console.log(`Total sum (arrow typed): ${sumArrowTyped}`);