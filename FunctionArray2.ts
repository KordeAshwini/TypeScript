
//function defination
function Addition(Arr:number[]):number
{   
    var total:number=0;
    var i:number=0;
    for(i = 0; i < Arr.length; i++)
    {
        total=total+Arr[i];
    }
    return total; 
}

var Marks:number[]=[67,89,77,90,88];

//function call
var result:number=0;
result=Addition(Marks);
console.log("Addition of all elements is : "+result);