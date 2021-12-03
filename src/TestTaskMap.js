"use strict";
// Problem 1: Implement the following method Map without using library methods
//
// Map applies a function to each element of a list and returns the
// resulting list.
//
// Map([1,2,3], x => x + 1) = [2,3,4]
// Map([1,2,3], x => x.toString()) = ["1","2","3"]
// Map([], ...) == []
exports.__esModule = true;
exports.numToString = exports.squareEachRes = exports.addOneRes = void 0;
var numbers2 = [1, 2, 3, 4];
function newMap(arr, func) {
    var newArr;
    newArr = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        newArr.push(func(item));
    }
    return newArr;
}
exports.addOneRes = newMap(numbers2, function (val) { return val + 1; });
exports.squareEachRes = newMap(numbers2, function (val) { return Math.pow(val, 2); });
exports.numToString = newMap(numbers2, function (val) { return val.toString(); });
console.log("_______________________________________________");
console.log("newMap([1,2,3,4], x => x + 1) = [2,3,4,5]");
console.log("Answer: ", exports.addOneRes);
console.log("_______________________________________________\n");
console.log("_______________________________________________");
console.log("newMap([1,2,3,4], x => x ** 2) = [1,4,9,16]");
console.log("Answer: ", exports.squareEachRes);
console.log("_______________________________________________\n");
console.log("_______________________________________________");
console.log("newMap([1,2,3,4], x => x.toString()) = ['1','2','3','4']");
console.log("Answer: ", exports.numToString);
console.log("_______________________________________________\n");
