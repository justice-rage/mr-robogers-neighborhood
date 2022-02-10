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

- - -

* Test 3: "It will replace numbers that include 3 with "Won't you be my neighbor?" and push them into a new array"
* Code: number = 15; roboTranslator(number);
* Expected Output: 'Beep!', 'Boop!', "Won't you be my neighbor?", 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!'

- - -

* Test 4: "It will push numbers without 1, 2 or 3 into a new array"
* Code: number = 15; roboTranslator(number);
* Expected Output: '0', 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!'
