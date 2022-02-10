// business logic

// STEP 1 - COMPLETE
// PUSH OUTPUT 0 TO X NUMBER INTO AN ARRAY

let capturedRange = [];

captureNumberRange = function returnZeroToNumber(number)  {
  for (let index = 0; index <= number; index++) {
    capturedRange.push(index);
  }
}

// -----------------------------------

// STEP 2 - COMPLETE
// TURN ARRAY OF NUMBERS INTO AN ARRAY WITH SINGLE STRING
let capturedRangeConvertedToString = capturedRange.toString();

// -----------------------------------

// STEP 3 - COMPLETE
// SPLIT SINGLE STRING BY COMMAS
let finalNumberToStringTransformation = capturedRangeConvertedToString.split(",")

// user interface logic