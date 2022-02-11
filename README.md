## Tests:

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

- - - 
* Test 5: "If a 3 and 2 are present in a number, the 3 will take precedent and it will be replaced with "Won't you be my neighbor?"
* Code: number = 15; roboTranslator(number);
* Expected Output: '0', 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Beep!', 'Won't you be my neighbor?', 'Beep!', 'Beep!'

- - -

* Test 6: "If a 2 and 1 are present in a number, the 2 will take precedent and it will be replaced with "Boop"
* Code: number = 15; roboTranslator(number);
* Expected Output: 0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', "Won't you be my neighbor?", 'Beep!', 'Beep!']
