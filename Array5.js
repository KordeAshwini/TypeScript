var Marks = [11, 21, 51, 101, 111];
var i = 0;
console.log("Array Traversal using for loop");
for (i = 0; i < Marks.length; i++) {
    console.log(Marks[i]);
}
console.log("Array Traversal using while loop");
i = 0;
while (i < Marks.length) {
    console.log(Marks[i]);
    i++;
}
console.log("Array Traversal using do-while loop");
i = 0;
do {
    console.log(Marks[i]);
    i++;
} while (i < Marks.length);
