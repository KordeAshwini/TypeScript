//function defination
function Addition(Arr) {
    var total = 0;
    var i = 0;
    for (i = 0; i < Arr.length; i++) {
        total = total + Arr[i];
    }
    return total;
}
var Marks = [67, 89, 77, 90, 88];
//function call
var result = 0;
result = Addition(Marks);
console.log("Addition of all elements is : " + result);
