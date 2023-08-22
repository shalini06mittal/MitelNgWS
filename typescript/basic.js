"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
var x = 10;
var username = "alsdj";
var choice = true;
choice = false;
var price = undefined;
var nos = [1, 2, 3, 4, 5];
// any
var arr = [1, 2, 3, 4, , "asd"];
console.log(arr.length);
for (var i = 0; i < arr.length; i++)
    console.log(arr[i]);
for (var index in arr)
    console.log(index, arr[index]);
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var value = arr_1[_i];
    console.log(value);
}
var n = 10;
var n = 100;
var p = 10;
p = 100;
function m1() {
    var p = "hi";
}
if (n % 2 == 100) {
    var res = "EVEN";
}
console.log(functions_1.obj.add(2, 4));
functions_1.obj.sub();
var emp = new functions_1.obj.Employee('shalini', 'shalini@gmail.com');
emp.show();
// console.log(res)
/**
 * npm i -g typescript
 * tsc basic.ts
 *  */
// .ts => .js
// module bundlers => commonjs, systemjs, webpack, and
// module => .js 
// transpilers => transpile the latest version to older version of js
// babel
