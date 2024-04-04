var Demo = /** @class */ (function () {
    function Demo() {
    }
    // Behaviours
    Demo.prototype.Display = function () {
        console.log("Inside Display function of Demo class");
    };
    return Demo;
}());
var obj = new Demo();
obj.Display();
