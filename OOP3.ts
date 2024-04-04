
class Demo 
{
    // Characteristics
    No1:number;
    No2:number;
    
    //default constructor
    constructor()
    {
       console.log("Inside default constructor of Demo");
       this.No1=0;
       this.No2=0;
    }

    // Behaviours
    Display()
    {
        console.log("Inside Display function of Demo class");
    }
}

var obj=new Demo();

obj.Display();
console.log("Value of No1 is : "+obj.No1);
console.log("Value of No2 is : "+obj.No2);