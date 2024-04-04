class Arithmetic
{
    public No1:number;
    public No2:number;

    constructor(A:number,B:number)
    {
        this.No1=A;
        this.No2=B;
    }

    Addition():number
    {
        var Ans : number = 0;
        Ans = this.No1 + this.No2;
        return Ans;
    }

    Substraction():number
    {
        var Ans : number = 0;
        Ans = this.No1 - this.No2;
        return Ans;
    }
}

var Aobj1 = new Arithmetic(11,10);
var Aobj2 = new Arithmetic(25,21);

console.log(Aobj1.No1);
console.log(Aobj1.No2);

var Result:number = 0;

Result = Aobj1.Addition();
console.log("Addition is : "+Result);

Result = Aobj2.Substraction();
console.log("Substraction is : "+Result);