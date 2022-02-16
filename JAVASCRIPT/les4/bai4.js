const obj = {
    a: 1,
    b: 2,
    c: 3
};
function invert(obj) {
    const result = {};
    let count = 1;
    for (let i in obj) {
        result[count] = i;
        count++;
    }
    return result;
}
console.log(invert(obj));
