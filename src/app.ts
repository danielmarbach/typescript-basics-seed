let implicitCoupon = 'pizza25'.toUpperCase(); // stirng is infered
let explicitCoupon: string = 'pizza25'.toUpperCase();
let wronglyInferedCoupon; // should use : string

wronglyInferedCoupon = 'pizza25';