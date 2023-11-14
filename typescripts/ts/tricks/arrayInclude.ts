let productArray = [
    {
        productName: "Netflix",
        isSubscriptionValid: false,
        isPaymentApproved: true,
    },
    {
        productName: "Amazon Video",
        isSubscriptionValid: false,
        isPaymentApproved: false,
    },
    {
        productName: "Some Subscriber",
        isSubscriptionValid: true,
        isPaymentApproved: true,
    },
];

let someresult = productArray.some((x) => {
    console.log(`some ${x.isSubscriptionValid}. ${x.isPaymentApproved}`);
    return x.isSubscriptionValid == true || x.isPaymentApproved == true;
});

let everyresult = productArray.every((x) => {
    console.log(`every ${x.isSubscriptionValid}. ${x.isPaymentApproved}`);
    return x.isSubscriptionValid == true || x.isPaymentApproved == true;
});

// let forEachresult = productArray.forEach(x=>
//   console.log(x.productName));

// console.log(productArray);
// console.log(forEachresult);

// let mapresult = productArray.map(x=> x.productName).filter(x=>x.productName=='Amazon Video');

let mapresult = productArray.map((x) => "Hello " + x.productName);

console.log(productArray);
console.log(mapresult);
