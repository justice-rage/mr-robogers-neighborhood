// business logic

const number = 5;

// Step 1
// COMPLETE: output 0 to X number
captureNumberRange = function returnZeroToNumber(number)  {
  for (let index = 0; index <= number; index++) {
    console.log(index);
  }
}

// Step 2
// COMPLETE: push output 0 to X number into array

let capturedRange = [];

captureNumberRange = function returnZeroToNumber(number)  {
  for (let index = 0; index <= number; index++) {
    capturedRange.push(index);
  }
}

// -----------------------------------

// TURN ARRAY OF NUMBERS INTO A STRING

// Step 3
// COMPLETE: convert all numbers in capturedRange to a string
// capturedRange.toString();

let capturedRangeConvertedToString = [];

convertCapturedRangeToString = function convertNumbersToString(array) {
  capturedRangeConvertedToString.push(array.toString());
}

// -----------------------------------

// TURN STRING BACK INTO ARRAY
// capturedRange.toString(); transforms entire array into a string



// user interface logic