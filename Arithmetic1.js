var Arithmetic = /** @class */ (function () {
    function Arithmetic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithmetic.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithmetic.prototype.Substraction = function () {
        var Ans = 0;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithmetic;
}());
var Aobj1 = new Arithmetic(11, 10);
var Aobj2 = new Arithmetic(25, 21);
console.log(Aobj1.No1);
console.log(Aobj1.No2);
var Result = 0;
Result = Aobj1.Addition();
console.log("Addition is : " + Result);
Result = Aobj2.Substraction();
console.log("Substraction is : " + Result);
