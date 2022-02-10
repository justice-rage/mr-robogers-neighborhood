## Tests:

### Describe: captureNumberRange()

* Test 1: "It will return a range of numbers from 0 to the user inputted number"
* Code: number = 5; captureNumberRange(number);
* Expected Output: 0, 1, 2, 3, 4, 5

- - -

* Test 2: "It will push a range of numbers from 0 to the user inputted number into an array"
* Code: number = 5; captureNumberRange(number);
* Expected Output: capturedRange = [0, 1, 2, 3, 4, 5];

- - -

### Describe: convertCapturedRangeToString()

* Test 1: "It will convert all numbers in capturedRange to a single string and push it into a new array"
* Code: capturedRange = [0, 1, 2, 3, 4, 5]; convertCapturedRangeToString(capturedRange);
* Expected Output: capturedRangeConvertedToString = ['0, 1, 2, 3, 4, 5'];