//Exercise 1:
var name = "Jerome";
console.log("Hello " + name);

//Exercise 2:
var x = 1125;
var answer = x % 2;
console.log(answer);

//Exercise 3:
var a = true;
var b = false;
var c = true;
console.log(a || b || c);

//Exercise 4:
var a = true;
var b = false;
var c = true;
console.log(a && b && c);

//Exercise 5:
var answer1 = 10 - 3 * 5/4 + 202 % 3;
var answer2 = 10 - (3 * (5/4) + (202 % 3));
console.log(answer1 + " " + answer2);
//Answers differ because of PEMDAS

//Exercise 6:
var a = "12";
var b = 113;
var c = 1.12356;
console.log(a + " " + b + " " + c);
var x = parseInt("Hello World");
console.log(x);
//NaN = Not a Number

//Diving deeper
//1
var line1 = "I am a BrainStation student";
var line2 = "I am a student";
console.log(line1.search("BrainStation")); //returns 7 i.e. position of first character
console.log(line2.search("BrainStation")); //returns -1 i.e. not found
//2
console.log(line1.replace("BrainStation student", "Junior Developer"));