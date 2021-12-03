"use strict";
// Problem 2: Implement the following method Fold
//
// Fold applies a function to each element of a list and propagates a state
// through calls to this function, starting with the initial state.
//
// Fold([1,2,3], 0, (sum,x) => sum + x) == 6
// Fold([1,2,3], "", (str,x) => str + x.ToString()) == "123"
// Fold([], init, ...) == init
exports.__esModule = true;
exports.arrToString = exports.sumOfArrEl = void 0;
var numbers1 = [1, 2, 3, 4];
function Fold(arr, initialVal, func) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        initialVal = func(initialVal, item);
    }
    return initialVal;
}
exports.sumOfArrEl = Fold(numbers1, 0, function (sum, item) { return sum + item; });
exports.arrToString = Fold(numbers1, "", function (sum, item) { return sum + item.toString(); });
console.log("_______________________________________________");
console.log("Fold([1,2,3,4], 0, (sum, item) => sum + item) = 10");
console.log("Answer: ", exports.sumOfArrEl);
console.log("_______________________________________________\n");
console.log("_______________________________________________");
console.log("Fold([1,2,3,4], '', (sum, item) => sum + item.toString()) = '1234'");
console.log("Answer: ", exports.arrToString);
console.log("_______________________________________________\n");
