// Problem 1: Implement the following method Map without using library methods
//
// Map applies a function to each element of a list and returns the
// resulting list.
//
// Map([1,2,3], x => x + 1) = [2,3,4]
// Map([1,2,3], x => x.toString()) = ["1","2","3"]
// Map([], ...) == []

let numbers2: number[] = [1, 2, 3, 4];

function newMap<T, U>(arr: T[], func: (a: T) => U): U[] {
  let newArr: U[];
  newArr = [];
  for (let item of arr) {
    newArr.push(func(item));
  }
  return newArr;
}

export const addOneRes = newMap(numbers2, (val) => val + 1);
export const squareEachRes = newMap(numbers2, (val) => val ** 2);
export const numToString = newMap(numbers2, (val) => val.toString());

console.log("_______________________________________________");
console.log("newMap([1,2,3,4], x => x + 1) = [2,3,4,5]");
console.log("Answer: ", addOneRes);
console.log("_______________________________________________\n");

console.log("_______________________________________________");
console.log("newMap([1,2,3,4], x => x ** 2) = [1,4,9,16]");
console.log("Answer: ", squareEachRes);
console.log("_______________________________________________\n");

console.log("_______________________________________________");
console.log("newMap([1,2,3,4], x => x.toString()) = ['1','2','3','4']");
console.log("Answer: ", numToString);
console.log("_______________________________________________\n");
