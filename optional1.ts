//optional arguments
//name chya pudhe or : chya adhi tyala optional mhantat
//optional arguments must be last argument
//if we want to make any argument as optional then we have to use ? symbol
//if we don't give any to the 2nd argument  then it will take undefined
function Display(No : number,value ? : number) : void
{
   console.log("No is : "+No);
    if(value != undefined)
    {
        console.log("Value is : "+value);
    }
}
Display(11,21);
Display(11);