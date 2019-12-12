const pizza = {
    name: 'pepperoni', toppings: ['pepperoni'],
};

function order({ name: pizzaName, toppings: pizzaToppings }: { name: string, toppings: string[] }) {
    console.log(pizzaName, pizzaToppings);
    return { pizzaName, pizzaToppings };
};

const { pizzaName } = order(pizza);
console.log(pizzaName);

const toppings = ['pepperoni', 'bacon', 'chilli', 'tomato'];

const [first, second, third] = toppings;
console.log(first, second, third);

function logToppings([first, second, third]: string[]) {
    console.log(first, second, third);
}
logToppings(toppings);