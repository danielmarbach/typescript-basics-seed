let pizzaSize: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'): void {
    pizzaSize = size;
}

selectSize('medium');

console.log(`Pizza size: ${pizzaSize}`);

let pizzaSizeNumber: number = 1;

// works also for boolean and enums
function selectSizeNumber(size: 1 | 2 | 3): void {
    pizzaSizeNumber = size;
}

selectSizeNumber(3);

console.log(`Pizza size: ${pizzaSizeNumber}`);