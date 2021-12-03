// Problem 3: implement Map in terms of Fold. Rather than implementing Map
// directly like the first exercise, implement Map by finding a way to call
// Fold so that it achieves the desired result.

//
// Map([1,2,3], x => x + 1) = [2,3,4]
// Map([1,2,3], x => x.ToString()) = ["1","2","3"]
// Map([], ...) == []

let numbers3: number[] = [1, 2, 3, 4];

function Fold1<T, U>(arr: T[], initialVal: U, func: (a: U, b: T) => U): U {
  for (let item of arr) {
    initialVal = func(initialVal, item);
  }
  return initialVal;
}

function mapByFold<T, U>(arr: T[], func: (a: T) => U): U[] {
  let newArr: U[];
  newArr = [];

  return Fold1(arr, newArr, (sum, item) => {
    sum.push(func(item));
    return sum;
  });
}
export const addOneRess = mapByFold(numbers3, (value) => value + 1);
export const squareEachRess = mapByFold(numbers3, (value) => value ** 2);
export const numToStringg = mapByFold(numbers3, (value) => value.toString());

console.log("_______________________________________________");
console.log("mapByFold([1,2,3,4], x => x + 1) = [2,3,4,5]");
console.log("Answer: ", addOneRess);
console.log("_______________________________________________\n");

console.log("_______________________________________________");
console.log("mapByFold([1,2,3,4], x => x ** 2) = [1,4,9,16]");
console.log("Answer: ", squareEachRess);
console.log("_______________________________________________\n");

console.log("_______________________________________________");
console.log("mapByFold([1,2,3,4], x => x.toString()) = ['1','2','3','4']");
console.log("Answer: ", numToStringg);
console.log("_______________________________________________\n\n\n");


