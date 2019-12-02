const pizza = {
    name: 'Pepperoni',
    price: 15,
    getName() {
        return this.name;
    }
};

interface pizza {
    name: string,
    price: number
}

const toppings = ['pepperoni'];

const orders = { pizza, toppings };

console.log(orders.pizza.getName());

function createOrder(pizza: pizza, toppings: string[]) {
    return { pizza, toppings };
}

console.log(createOrder(pizza, toppings));