function DisplayTime(Division) {
    switch (Division) {
        case "A":
            {
                console.log("Your Exam at 7 AM");
                break;
            }
        case "B":
            {
                console.log("Your Exam at 8 AM");
                break;
            }
        case "C":
            {
                console.log("Your Exam at 9 AM");
                break;
            }
        case "D":
            {
                console.log("Your Exam at 10 AM");
                break;
            }
        default:
            {
                console.log("Invalid Division, it should be either A,B,C,D");
                break;
            }
    }
}
var Div = "C";
DisplayTime(Div);
