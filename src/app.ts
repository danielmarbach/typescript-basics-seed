let coupon: string | null = 'pizza25'; // discriminated union type

function removeCoupon(): void {
    coupon = null;
}

console.log(coupon);

removeCoupon();

console.log(coupon);