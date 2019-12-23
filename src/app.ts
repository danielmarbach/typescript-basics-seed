let selectedTopping: string = 'pepperoni';

function selectTopping(topping: string): void { // void can also be infered
    selectedTopping = topping; // impure function
}

selectTopping('bacon');

console.log(selectedTopping);