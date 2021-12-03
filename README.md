# TestTask

# Problem 1: Implement the following method Map without using library methods

Map applies a function to each element of a list and returns the resulting list.

Map([1,2,3], x => x + 1) = [2,3,4]

Map([1,2,3], x => x.toString()) = ["1","2","3"]

Map([], ...) == []


# Problem 2: Implement the following method Fold

Fold applies a function to each element of a list and propagates a state through calls to this function, starting with the initial state.

Fold([1,2,3], 0, (sum,x) => sum + x) == 6

Fold([1,2,3], "", (str,x) => str + x.ToString()) == "123"

Fold([], init, ...) == init


# Problem 3: implement Map in terms of Fold. 
Rather than implementing Map directly like the first exercise, implement Map by finding a way to call Fold so that it achieves the desired result.

Map([1,2,3], x => x + 1) = [2,3,4]

Map([1,2,3], x => x.ToString()) = ["1","2","3"]

Map([], ...) == []


# Build
use codesandbox link: https://codesandbox.io/s/gallant-platform-mwyy2?file=/src/index.ts

or 

1)Clone project and in the terminal execute command: tsc index.ts 

.js - will be generated

2)Now execute command: node index.js - in console will be shown the result of 3 problems.
<p align="left">
<img src=""/>
</p>




