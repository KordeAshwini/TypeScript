function CheckEven(No:number):boolean
{
    if((No%2)==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var value : number=11;
var bret : boolean=false;

bret=CheckEven(value);
if(bret==true)
{
    console.log("Number is Even");
}
else
{
    console.log("Number is Odd");
}