function CheckEven(No) {
    if ((No % 2) == 0) {
        return true;
    }
    else {
        return false;
    }
}
var value = 11;
var bret = false;
bret = CheckEven(value);
if (bret == true) {
    console.log("Number is Even");
}
else {
    console.log("Number is Odd");
}
