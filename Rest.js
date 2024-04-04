//... eclipse operator
function Display() {
    var Data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Data[_i] = arguments[_i];
    }
    console.log("Number of arguments are : " + Data.length);
    /*var i:number=0;
    for(i = 0; i < Data.length; i++)
    {
        console.log(Data[i]);
    }*/
}
Display();
Display(11, 21, 51);
Display(11, 21, 51, 111);
Display(10, 20, 30, 40, 50);
