function DisplayTime(Division) {
    if (Division == "A") {
        console.log("Your Exam at 7 AM");
    }
    else if (Division == "B") {
        console.log("Your Exam at 8 AM");
    }
    else if (Division == "C") {
        console.log("Your Exam at 9 AM");
    }
    else if (Division == "D") {
        console.log("Your Exam at 10 AM");
    }
    else {
        console.log("Invalid Division, it should be A,B,C,D");
    }
}
var Div = "C";
DisplayTime(Div);
