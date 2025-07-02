"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var string = _a.name, boolean = _a.ispaid;
}
createUser({ name: "osama khan", ispaid: true });
// this function will return the object 
function userData() {
    return { name: "osama khan", rollno: 20 };
}
userData();
function user(user) {
    return {
        name: user.name,
        rollno: user.rollno
    };
}
user({ name: "osama ", rollno: 20 }); // You are passing an object to the function that matches the User type.
var userReadDetail = {
    _id: "1234",
    name: "khan",
    rollno: 20,
    ispaid: true
};
