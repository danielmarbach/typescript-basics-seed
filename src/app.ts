type Pizza = { name: string, toppings: number };

const pizza: Pizza = { name: 'Blazzing Inferno', toppings: 5 };

const serialized = JSON.stringify(pizza);

function getNameFromJson(obj: string) {
    return (JSON.parse(obj) as Pizza)?.name;
}

console.log(getNameFromJson(serialized));