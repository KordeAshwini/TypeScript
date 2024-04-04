function Addition(No1:number,No2:number):number
{
    var Ans :number=0;
    Ans=No1+No2;
    return Ans;
}

function Substraction(No1:number,No2:number):number
{
    var Ans :number=0;
    Ans=No1-No2;
    return Ans;
}

var value1:number=11;
var value2:number=10;
var Result:number=0;

Result=Addition(value1,value2);
console.log("Addition is : "+Result);

Result=Substraction(value1,value2);
console.log("Substraction is : "+Result);