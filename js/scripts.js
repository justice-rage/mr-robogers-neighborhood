// business logic

const number = 5;

// STEP 1
// COMPLETE: output 0 to X number
captureNumberRange = function returnZeroToNumber(number)  {
  for (let index = 0; index <= number; index++) {
    console.log(index);
  }
}

// STEP 2
// COMPLETE: push output 0 to X number into array

let capturedRange = [];

captureNumberRange = function returnZeroToNumber(number)  {
  for (let index = 0; index <= number; index++) {
    capturedRange.push(index);
  }
}

// -----------------------------------

// TURN ARRAY OF NUMBERS INTO AN ARRAY WITH SINGLE STRING

// STEP 3
// COMPLETE: convert all numbers in capturedRange to a string
// capturedRange.toString();

let capturedRangeConvertedToString = capturedRange.toString();

// -----------------------------------

// STEP 5
// SPLIT SINGLE STRING BY COMMAS
// capturedRangeConvertedToString.split(","); splits array by commas

let finalNumberToStringTransformation = capturedRangeConvertedToString.split(",")

// user interface logic