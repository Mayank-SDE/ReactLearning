var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var age;
age = 12;
var hobbies;
var randomObject;
randomObject = {
    name: 'mayank',
    age: 25,
};
var peopleObjectArray;
function add(a, b) {
    return a + b;
}
function printFunction(value) {
    console.log('printing ' + value);
}
printFunction('Mayank');
function genericFunction(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3, 4, 5, 6, 7, 8];
var updatedArray = genericFunction(demoArray, 10);
console.log(updatedArray);
