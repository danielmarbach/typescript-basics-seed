// optional parameter
let sumOrder: (price: number, quantity?: number) => number;

// default params
sumOrder = (x, y = 1) => x * y;

const sum = sumOrder(25);

console.log(`Total sum: ${sum}`);