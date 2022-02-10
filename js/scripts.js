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

// user interface logic