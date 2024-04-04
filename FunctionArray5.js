function Demo() {
    var Languages = ["C", "C++", "Java", "Angular"];
    return Languages;
}
var Arr;
Arr = Demo();
//console.log("Elements of array are : "+Arr);
console.log("Elements of array are : ");
var i = 0;
for (i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
}
