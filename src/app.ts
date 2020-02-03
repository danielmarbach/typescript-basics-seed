// can also be exported
type Size = 'small' | 'medium' | 'large';
// function type
type Callback = (size: Size) => void;

let pizzaSize: Size = 'small';

const selectSize: Callback = (size) => {
    pizzaSize = size;
}

selectSize('medium');