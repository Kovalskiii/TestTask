import { addOneRes, squareEachRes, numToString} from "./TestTaskMap"
import { sumOfArrEl, arrToString } from "./TestTaskFold"
import { addOneRess, squareEachRess, numToStringg } from "./TestTaskMapByFold"

console.log("____________________Map________________________");
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
console.log("_______________________________________________\n\n\n");


console.log("_____________________Fold_______________________");
console.log("Fold([1,2,3,4], 0, (sum, item) => sum + item) = 10");
console.log("Answer: ", sumOfArrEl);
console.log("_______________________________________________\n");

console.log("_______________________________________________");
console.log("Fold([1,2,3,4], '', (sum, item) => sum + item.toString()) = '1234'");
console.log("Answer: ", arrToString);
console.log("_______________________________________________\n\n\n");


console.log("___________________Map_by_Fold___________________");
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
console.log("_______________________________________________\n");

