const ob = {
    firstName: "Hien",
    lastName: "Vo",
    dob: 1999,
    getFullName() {
        return this.firstName + " " + this.lastName;
    },
    getAge() {
        return 2021-this.dob;
    }

};
console.log(ob);
console.log(ob.getFullName());
console.log(ob.getAge());