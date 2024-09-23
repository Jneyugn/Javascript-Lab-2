// console.log("hello");

// If-else Condition

let x = 15;

if (x > 18) {
console.log('x is greater than 18');
}else if (x > 9){
console.log("x is smaller than 18 but bigger than 9");

}else if(x > 6){
console.log("x is bigger than 6 but smaller than 9");

}else if (x = 0){
console.log("x is 0");

}else{
console.log('x is smaller than zero and is negative number');
}

// Switch Statement


var day = '6';
switch (day) {
    case '1':
        console.log('Sunday');
        break;
    case '2':
        console.log('Monday');
        break;
    case '3':
        console.log('Tuesday');
        break;
    case '4':
        console.log('Wednesday');
        break;
    case '5':
        console.log('Thursday');
        break;
     case '6':
        console.log('Friday');
        break;
     case '7':
        console.log('Saturday');
        break;
    default:
        console.log('Unknown day'); 
}

// Loops (For, While, Do...While)
// For Loop
for (let i = 1; i <= 5; i++) {
   console.log("For Loop Number is: " + (i))
}

// for (var day = 1; day <= 7; day++) {
//     console.log("Day " + day + " of the week");
// }
// console.log("Lets take a break");

// While Loop


let i = 1;
 
while (i <= 5) { 
console.log("While Loop Number is: " + (i ++))
}

// Do...While Loop
let j = 0; 
 
do {
 console.log("Do.. While Loop Number is: "+ (j + 1))
 j++;
} while (j < 5);
console.log("No more numbers for now.");

// While Loop
// Control Flow with break and Continue

for (var d = 1; d <= 10; d++) {
    if (d === 3) {
        break; 
    }
    console.log(d);
}
console.log("Loop exited at d = 3");

for (var d = 1; d <= 10; d++) {
if (d === 3){
    continue;
}
console.log(d);
}
console.log("Loop continued after 3");


// Scope and Context

var person = {firstName: "Jenny", lastName: "Nguyen", age: 24};

for (var key in person) {
    console.log(key + ": " + person[key]);
}

var person = {
    firstName: "Jenny",
    lastName: "Nguyen",
    age: 24
};

with (person) {
    console.log(firstName + " " + lastName + " is " + age + " years old");
}
testingFun("hehehehe")

function testingFun(lol){
    console.log(lol);
}

// console.log(lol); doesnt exist outside of scope.
