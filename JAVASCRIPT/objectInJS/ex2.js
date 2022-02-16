const another = {};
another.dob = 1999;
another.getAge = function () {
    return 2021 - this.dob;  
};
another.fullName = "Vo Duc Hien";
another.myLove = "Than Thi Hanh";
another.getSalary = function () {
    return 15000;
}

console.log(another.myLove);
console.log(another.getSalary());