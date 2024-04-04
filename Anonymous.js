//fat arrow function
//lambda function
//anonymous function
function Addition(No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}
var Result = 0;
Result = Addition(10, 11);
console.log("Addition is : " + Result);
//body of function is single line
//return statement is not required
//function keyword is not required
//function name is not required
//name     arguments                body
var Fun = function (No1, No2) { return No1 + No2; };
Result = Fun(10, 11);
console.log("Addition is : " + Result);
console.log("Type of Fun is : " + typeof (Fun));
