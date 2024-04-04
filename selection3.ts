function DisplayTime(Division: string) :void
{
    if(Division=="A")
    {
        console.log("Your Exam at 7 AM");
    }
    else if(Division=="B")
    {
        console.log("Your Exam at 8 AM");
    }
    else if(Division=="C")
    {
        console.log("Your Exam at 9 AM");
    }
    else if(Division=="D")
    {
        console.log("Your Exam at 10 AM");
    }
    else
    {
        console.log("Invalid Division, it should be either A,B,C,D");
    }
}

var Div : string = "C";
DisplayTime(Div);