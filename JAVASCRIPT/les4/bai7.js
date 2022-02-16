const oldest = {
  Emma: 71,
  Jack: 45,
  Amy: 15,
  Ben: 29,
};
function findAge(obj) {
    let max = 0;
    let result = "";
    for (let i in obj) {
        if (max < obj[i]) {
            max = obj[i];
            result = i;
        }
    }
    return result;

}
console.log(findAge(oldest));