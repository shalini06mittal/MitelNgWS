"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj = void 0;
function add(n1, n2) {
    return n1 + n2;
}
function displayDetails(person) {
    console.log(person.name);
}
function sub() {
    console.log('sub');
}
displayDetails({ "name": "Shalini" });
// displayDetails(10)
var Employee = /** @class */ (function () {
    function Employee(name, email) {
        this.name = name;
        this.email = email;
    }
    Employee.prototype.show = function () {
        // console.log(this.name+ " "+this.email)
        // template literals
        console.log("Name : ".concat(this.name, " Email : ").concat(this.email));
    };
    return Employee;
}());
exports.obj = { displayDetails: displayDetails, add: add, sub: sub, Employee: Employee };
