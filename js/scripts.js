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

// POTENTIAL STEP 3 - COMPLETE
// SPLIT SINGLE STRING BY COMMAS
let finalNumberToStringTransformation = capturedRangeConvertedToString.split(",")

// STEP 3 - INCOMPLETE
// Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
// .toString and .includes - attempt to include together

roboTranslator = function turnOneIntoBeepr(number)  {
  let translation = []

  for (let index = 0; index <= number; index++) {
    if (index.toString().includes("1")) {
      translation.push("Beep!");
    };
  }
  return translation
}

// user interface logic