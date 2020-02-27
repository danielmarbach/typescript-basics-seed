interface Sizes {
    sizes: string[];
}

interface Pizza extends Sizes {
    name: string;
    toppings?: number;
    getAvailableSizes(): string[];
    [key: number]: string; // or number, any, can also have multiple indexers or be further down
};

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
    return {
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    };
}

pizza = createPizza('Pepperoni', ['small', 'medium']);
pizza[1] = 'xuyz';