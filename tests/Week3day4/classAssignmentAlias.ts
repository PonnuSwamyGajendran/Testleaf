// Assignment using Union alias 

type PaymentMethod = string 

let paymentMode:PaymentMethod 

    paymentMode = "UPI",
    paymentMode = "CreditCard",
    paymentMode = "PayPal"

function pay(option1:PaymentMethod, option2?:PaymentMethod) {
    if(paymentMode === 'CreditCard' || 'UPI') {
        console.log(`Valid payment mode for any tranx is ${option1} and ${option2}`)
    } else {
        console.log(`Invalid payment mode`)
    }
}
pay("CreditCard", "UPI")