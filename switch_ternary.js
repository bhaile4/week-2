
/* Question 1)

a) create a variable called num that generates a random number between 0-5 (use Math.floor (Links to an external site.) and
Math.random (Links to an external site.))*/

let num = Math.floor(Math.random() * 3)
console.log(num)

switch (num){
    case 0:
        console.log("The first recorded zero appeared in Mesopotamia around 3 B.C")
        break;

    case 1:
        console.log("The ancient Greeks did not consider One to be a number at all. A number, said Euclid, is an “aggregate of units”, so numbers began at Two. ")
        break;

    case 2:
        console.log("I am ALIVE")
    break;
    case 3:console.log("We live on the 3rd planet from the sun.") 
    default:
        console.log('larger than 4')
}


/* Question 1) 

a) for this switch statement, you will use Date().getMonth() (Links to an external site.)

b) for each case console.log someone's birthday for that month*/

// Create a new Date object
var date = new Date()
console.log(date)

var month = date.getMonth() -5
console.log(month)

switch (month){
    case 1:
        console.log("It's my friend's birthday") 
        break;
    case 2:
        console.log("Its the independence day")
        break;
    case 3:
        console.log("It's My birthday")
        break;
    case 4:
        console.log("It's the first day I started working")
        break;
    default:
    console.log("no birthday month")
    break;
}

//Ternary Operators
// Question 1
let person = {
    name: 'tony',
    age: 20,
    driver: null
    };
    
    if (person.age >= 16) {
    person.driver = 'Yes';
    } else {
    person.driver = 'No';
    }

   // Question 2
    var age = 7;
var kindergarten_eligible;
if (age > 5) {
kindergarten_eligible = "Old enough";
}
else {
kindergarten_eligible = "Too young";
} 
 