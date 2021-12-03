"use strict";
// Problem 3: implement Map in terms of Fold. Rather than implementing Map
// directly like the first exercise, implement Map by finding a way to call
// Fold so that it achieves the desired result.
exports.__esModule = true;
exports.numToStringg = exports.squareEachRess = exports.addOneRess = void 0;
//
// Map([1,2,3], x => x + 1) = [2,3,4]
// Map([1,2,3], x => x.ToString()) = ["1","2","3"]
// Map([], ...) == []
var numbers3 = [1, 2, 3, 4];
function Fold1(arr, initialVal, func) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        initialVal = func(initialVal, item);
    }
    return initialVal;
}
function mapByFold(arr, func) {
    var newArr;
    newArr = [];
    return Fold1(arr, newArr, function (sum, item) {
        sum.push(func(item));
        return sum;
    });
}
exports.addOneRess = mapByFold(numbers3, function (value) { return value + 1; });
exports.squareEachRess = mapByFold(numbers3, function (value) { return Math.pow(value, 2); });
exports.numToStringg = mapByFold(numbers3, function (value) { return value.toString(); });
console.log("_______________________________________________");
console.log("mapByFold([1,2,3,4], x => x + 1) = [2,3,4,5]");
console.log("Answer: ", exports.addOneRess);
console.log("_______________________________________________\n");
console.log("_______________________________________________");
console.log("mapByFold([1,2,3,4], x => x ** 2) = [1,4,9,16]");
console.log("Answer: ", exports.squareEachRess);
console.log("_______________________________________________\n");
console.log("_______________________________________________");
console.log("mapByFold([1,2,3,4], x => x.toString()) = ['1','2','3','4']");
console.log("Answer: ", exports.numToStringg);
console.log("_______________________________________________\n");
