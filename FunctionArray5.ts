
function Demo():string[]
{
   var Languages:string[]=["C","C++","Java","Angular"];
   return Languages;
}

var Srr:string[];
Srr = Demo();
//console.log("Elements of array are : "+Arr);

console.log("Elements of array are : ");
var i:number=0;

for(i=0;i<Srr.length;i++)
{
    console.log(Srr[i]);
}