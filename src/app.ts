const toppings = ['bacon', 'chilli'];

const newToppings = ['pepperoni'];

// copy semantics
const allToppings = [...toppings, ...newToppings];

console.log(allToppings);