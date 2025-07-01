"use strict";
// function addnum(num){ // if we simply write this it is any and and the function we must declare the type
//   return num
// }
// addnum()
Object.defineProperty(exports, "__esModule", { value: true });
function addnum(num) {
    return num + 3;
}
addnum(4);




// function login(name,email){}  here the email and the name are the any marker  we should this 
// login("khan","khan@gmail.com")
function login(name, email) { }
login("khan", "khan@gmail.com");




var names = ['khan', 'aslam', 'ali'];
names.map(function (names) { "the names are ".concat(names); });





// void means having no return values
function nothing(errMsg) {
    console.log(errMsg);
}




//   never: Means “this function never finishes normally”
// Used when a function never returns at all.
// This happens if the function:
// Always throws an error
// Loops forever
function consolefun(errMsg) {
    throw new Error(errMsg);
}
