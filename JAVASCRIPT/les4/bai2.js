const order = { Shampoo: 5.99, "Rubber Ducks": 15.99 };
function freeShipping(obj) {
    let sum = 0;
    for (let amount in obj) {
        sum += amount;
    }
    if (sum > 50) {
        return true;
    } else {
        return false;
    }
}
console.log(freeShipping(order));

