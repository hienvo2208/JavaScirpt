const myFamily = {
    Hien: 23,
    Hanh: 23,
    Thao: -8,
}
function afterNYear(obj, n) {
    const result = {};
    for (let name in obj) {
        let age = obj[name];
        result[name] = age + n;
    }
}
console.log(afterNYear(myFamily, 15));