var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('hello');
//types 
var myString = 'hello word';
myString = '22';
var myNumber = 22;
var myBool = true;
var myVar = 'hello';
myVar = false;
//strings
var stringArr = ['item1', 'item2', 'item3'];
var numberArr = [1, 2, 3];
var booleanArr = [true, false, false];
var anyArr = [true, 1, 'str', {
        str: 12
    }];
//tuple
var strNumTuple;
strNumTuple = ['hello', 22];
//void, undefined, null
var myNull = undefined;
var myVoid = null;
var myUndefined = undefined;
//functions
function getAdd(num1, num2) {
    return num1 + num2;
}
var mySum = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    ;
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    ;
    return num1 + num2;
};
function getName(firstName, lastName) {
    if (lastName === undefined) {
        return "" + firstName;
    }
    return firstName + " " + lastName;
}
var userName = getName('Julius', 'Charles');
function myVoidFunction() {
    return;
}
function showTodo(todo) {
    console.log(todo.title + " - " + todo.text);
}
var myTodo = { title: 'Study typescript', text: 'study typescript with fazt or netninja' };
showTodo(myTodo);
//clases
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        return (this.name + " register successfuly");
    };
    User.prototype.showEmail = function () {
        return this.email;
    };
    User.prototype.AgeInYears = function () {
        return this.age + " in years";
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paide invoice");
    };
    return User;
}());
var jhon = new User('Jhon', 'jhon@gmail.com', 22);
console.log(jhon.AgeInYears());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var gordon = new Member(2, 'gordon', 'gordon@gmail.com', 31);
gordon.payInvoice();
document.write(gordon.name);
