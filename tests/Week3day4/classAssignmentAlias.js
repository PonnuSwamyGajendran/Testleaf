// Assignment using Union alias 
var paymentMode;
paymentMode = "UPI",
    paymentMode = "CreditCard",
    paymentMode = "PayPal";
function pay(option1, option2) {
    if (paymentMode === 'CreditCard' || 'UPI') {
        console.log("Valid payment mode for any tranx is ".concat(option1, " and ").concat(option2));
    }
    else {
        console.log("Invalid payment mode");
    }
}
pay("CreditCard", "UPI");
