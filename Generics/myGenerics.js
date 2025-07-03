"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  generics :- generics are the “Write code once, and use it with any type (string, number, object, etc).”
// it means that you can ones write the code then you can use the any types of data you can use within it
function identity(value) {
    return value;
}
identity("three");
function example(val) {
    return val;
}
example(3);
// generics in array
function arrayfun(value) {
    return value;
}
arrayfun([3]);
// arrow fun
var arrowFun = function (val) {
    return val;
};
arrowFun(["4"]);
// generics for the specific types  and taking multiple arguments
function anyTypes(valueOne, valueTwo) {
    return [valueOne, valueTwo];
}
anyTypes(3, 4);
