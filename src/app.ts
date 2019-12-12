const pizza = { name: 'pepperoni' };

const toppings = ['pepperoni'];

// copy
const order = {
    ...pizza,
    toppings,
};

// copy
const finalOrder = { ...order };

console.log(finalOrder);