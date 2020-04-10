class Pizza {
    private toppings: string[] = [];

    constructor(private name: string) { }

    // by default public
    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni');
pizza.addTopping('pepperoni');

console.log(pizza);