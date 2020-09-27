console.log('hello')

//types 
let myString: string = 'hello word';
myString = '22';


let myNumber: number = 22;
let myBool: boolean = true;

let myVar: any = 'hello';
myVar = false;


//strings
let stringArr: string[] = ['item1', 'item2', 'item3'];
let numberArr: number[] = [1,2,3];
let booleanArr: boolean[] = [true, false, false]
let anyArr: any[] = [true, 1, 'str', {
    str: 12
}] 


//tuple
let strNumTuple: [string, number];
strNumTuple = ['hello', 22];


//void, undefined, null
 let myNull: null = undefined;
 let myVoid: void = null;
 let myUndefined: undefined = undefined;

//functions

function getAdd(num1: number, num2: number): number{
    return num1 + num2;
}

let mySum = (num1: (number | string), 
            num2: (number | string)):(number | string) => {
    if(typeof(num1) === 'string'){
        num1 = parseInt(num1);
    };
    if(typeof(num2) === 'string'){
        num2 = parseInt(num2);
    };
    return num1 + num2;
}


function getName(
    firstName: string,
    lastName?: string){
        if(lastName === undefined){
            return `${firstName}`
        }
        return `${firstName} ${lastName}`
}

const userName:string = getName('Julius', 'Charles');

function myVoidFunction():void{
    return;
}

//interfaces
interface Itodo {
    title: string, 
    text: string
}

function showTodo(todo: Itodo){
    console.log(`${todo.title} - ${todo.text}`)
}

let myTodo: Itodo = {title: 'Study typescript', text: 'study typescript with fazt or netninja'}

showTodo(myTodo)



//clases
class User {
    public name: string;
    public email: string;
    protected age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    register() {
        return(`${this.name} register successfuly`)
    }
    public showEmail() {
        return this.email;
    }
    public AgeInYears(){
        return `${this.age} in years`
    }

    payInvoice() {
        console.log(`${this.name} paide invoice`)
    }
}

let jhon = new User('Jhon', 'jhon@gmail.com', 22);
console.log(jhon.AgeInYears())

class Member extends User {
    id: number;

    constructor(id: number, name: string, email: string, age: number){
        super(name, email, age);
        this.id = id;
    }

    payInvoice() {
        super.payInvoice();
    }
}

let gordon = new Member(2, 'gordon', 'gordon@gmail.com', 31);
gordon.payInvoice();

document.write(gordon.name)