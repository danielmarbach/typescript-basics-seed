abstract class Sizes {
    constructor(protected sizes: string[]) { }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes() {
        return this.sizes;
    }
}


class Pizza extends Sizes {
    private toppings: string[] = [];

    constructor(readonly name: string, readonly sizes: string[]) {
        super(sizes);
    }

    // by default public
    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni', ['small', 'medium']);
pizza.addTopping('pepperoni');
console.log(pizza);