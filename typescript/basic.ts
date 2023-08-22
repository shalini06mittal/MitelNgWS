import { obj as f } from "./functions"; 

let x:number = 10;
let username:string = "alsdj"

let choice:boolean = true
choice = false
let price = undefined

let nos=[1,2,3,4,5]

// any
let arr:any[]=[1,2,3,4,,"asd"]

console.log(arr.length)
for(let i=0;i<arr.length;i++)
    console.log(arr[i])

for(let index in arr)
    console.log(index, arr[index])

for(let value of arr)
    console.log(value)

var n = 10
var n = 100

let p=10
p = 100
function m1()
{
    let p ="hi"
}
if(n%2==100){
    var res = "EVEN"
}
console.log(f.add(2,4))
f.sub()

let emp = new f.Employee('shalini','shalini@gmail.com')
emp.show()

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
