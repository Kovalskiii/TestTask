// Problem 2: Implement the following method Fold
//
// Fold applies a function to each element of a list and propagates a state
// through calls to this function, starting with the initial state.
//
// Fold([1,2,3], 0, (sum,x) => sum + x) == 6
// Fold([1,2,3], "", (str,x) => str + x.ToString()) == "123"
// Fold([], init, ...) == init

let numbers1: number[] = [1, 2, 3, 4];

function Fold<T, U>(arr: T[], initialVal: U, func: (a: U, b: T) => U): U {
  for (let item of arr) {
    initialVal = func(initialVal, item);
  }
  return initialVal;
}

export const sumOfArrEl = Fold(numbers1, 0, (sum, item) => sum + item);
export const arrToString = Fold(numbers1, "", (sum, item) => sum + item.toString());

console.log("_______________________________________________");
console.log("Fold([1,2,3,4], 0, (sum, item) => sum + item) = 10");
console.log("Answer: ", sumOfArrEl);
console.log("_______________________________________________\n");

console.log("_______________________________________________");
console.log("Fold([1,2,3,4], '', (sum, item) => sum + item.toString()) = '1234'");
console.log("Answer: ", arrToString);
console.log("_______________________________________________\n");
