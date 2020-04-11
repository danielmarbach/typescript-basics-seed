const date = +Date.now();
console.log(date);

class Coupon {
    static readonly allowed = ['Pepperoni', 'Blazing Inferno'];

    static create(percentage: number) {
        return `PIZZA_RESTAURANT_${percentage}`
    }
}

console.log(Coupon.allowed);
console.log(Coupon.create(25));
