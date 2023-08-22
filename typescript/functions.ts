 function add(n1:number, n2:number):number{
    return n1+n2
}
// specifies structure for Perosn
interface Person{
    name:string;
    email?:string; // ? optional
}
 function displayDetails(person:Person){
    console.log(person.name)
}

 function sub(){
    console.log('sub')
}
displayDetails({"name":"Shalini"})
// displayDetails(10)

class Employee{
    name:string;
    email:string;
    constructor(name:string, email:string){
        this.name = name;
        this.email = email
    }
    show(){
       // console.log(this.name+ " "+this.email)
       // template literals
        console.log(`Name : ${this.name} Email : ${this.email}`)
    }
}
export let obj = {displayDetails, add, sub, Employee}