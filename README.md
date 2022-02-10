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

### Describe: roboTranslator()

* Test 1: "It will replace numbers that include 1 with "Beep!" and push them into a new array"
* Code: number = 15; roboTranslator(number);
* Expected Output: 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!'

- - -

* Test 2: "It will replace numbers that include 2 with "Boop" and push them into a new array"
* Code: number = 15; roboTranslator(number);
* Expected Output: 'Beep!', 'Boop!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!'
