let pizza: { name: string, price: number };

pizza = {
    name: 'Plain Old Pepperoni',
    price: 20,
};

let pizzaInline: { name: string, price: number } = {
    name: 'Plain Old Pepperoni',
    price: 20,
};

let pizzaWithFunction: { name: string, price: number, getName(): string };

pizzaWithFunction = {
    name: 'Plain Old Pepperoni',
    price: 20,
    getName() {
        return pizzaWithFunction.name;
    },
};

console.log(pizzaWithFunction.getName());