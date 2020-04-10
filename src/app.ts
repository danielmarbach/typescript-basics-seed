class Pizza {
    private toppings: string[] = [];

    constructor(readonly name: string) { }

    // by default public
    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni');
pizza.addTopping('pepperoni');
console.log(pizza);