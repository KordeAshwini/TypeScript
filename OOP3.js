var Demo = /** @class */ (function () {
    function Demo() {
        console.log("Inside default constructor of Demo");
        this.No1 = 0;
        this.No2 = 0;
    }
    // Behaviours
    Demo.prototype.Display = function () {
        console.log("Inside Display function of Demo class");
    };
    return Demo;
}());
var obj = new Demo();
obj.Display();
console.log("Value of No1 is : " + obj.No1);
console.log("Value of No2 is : " + obj.No2);
