// Bilen Lab week 2 day 1


//1. Create a loop that logs the numbers from 0-99 (ascending)
for (var i = 0; i <= 99; i++) {
    console.log(i);
 }
console.log("=================end of # 1=======================")

//2.Create a loop that logs the numbers from 99-0 (descending)
 for (var i = 99; i >= 0;   i--) {
    console.log(i);
 }
 console.log("=================end of 2========================")
//3.Create a loop that logs the EVEN  numbers from 0-98 (ascending)
 for(var counter = 0; counter <= 98; counter++ )
    if(counter % 2 == 0){
    console.log(counter)
    }
    console.log("===============end of 3==========================")
//4.Create a loop that logs the EVEN  numbers from 98-0 (descending)
for (var counter = 98; counter >= 0;   counter--) 
    if(counter % 2 == 0){
    console.log(counter);
     }

console.log("===============end of 4==========================")
     //5.Create a loop that logs the ODD  numbers from 0-99 (ascending)
     for(var counter = 0; counter <= 99; counter++ )
        if(counter % 2 == 1){
        console.log(counter)
    }
console.log("===========end of 5==============================")
 //6.Create a loop that logs the ODD  numbers from 99-0 (descending)
    for (var counter = 99; counter >= 0;   counter--) 
        if(counter % 2 == 1){
        console.log(counter);
     }
console.log("==============end of 6===========================")
//7.Create a loop that logs the numbers from 49-72 (ascending)
  for (var i = 49; i <= 72; i++) {
    console.log(i);
 }

 console.log("==================end of 7=====================")
 //8.Create a loop that logs the numbers from 81-26 (descending)
 for (var i = 81; i >= 26; i--) {
    console.log(i);
 }

 console.log("=================end of 8 ========================")
 //9.Create a loop that logs the numbers from 3-90 that are multiples of 3 (ascending)
 for( var counter = 3; counter <= 90; counter++){
    if(counter % 3 === 0){
        console.log(counter)
    }
}
