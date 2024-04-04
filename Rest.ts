//rest arguments:accepts any number of arguments of same type
//... eclipse operator:accepts any number of arguments of same type

function Display(...Data : number[]):void
{
    console.log("Number of arguments are : "+Data.length);
    /*var i:number=0;
    for(i = 0; i < Data.length; i++)
    {
        console.log(Data[i]);
    }*/
}
Display();
Display(11,21,51);
Display(11,21,51,111);
Display(10,20,30,40,50);