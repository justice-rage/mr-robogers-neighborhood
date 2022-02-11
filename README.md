# _Mr. Roboger's Neighborhood_

#### By _**Justice Douglas**_

#### _A web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with some slight alterations made within the range._

## Technologies Used

* _Bootstrap_
* _CSS_
* _HTML_
* _JavaScript_
* _jQuery_

## Description

_A web application that takes a number from the user and returns a range of numbers from 0 to the user inputted number with numbers that contain a 1 replaced with "Beep!", numbers that contain a 2 replaced with "Boop!", and numbers that contain a 3 replaced with "Won't you be my neighbor?"_

## Setup/Installation Requirements

1. _Clone project from Github repository to local machine._
2. _Navigate to your file manager and click on the HTML file to open in your browser._
3. _You should now be able to input a number and receive Mr. Roboger's translation._

## Known Bugs

* _Letters and symbols return nothing._
* _Anything below 1 returns nothing._

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

- - -
- - -

## License

_Licensed under the [MIT License](https://choosealicense.com/licenses/mit/)_

Copyright (c) _02/11/2022_ _Justice Douglas_