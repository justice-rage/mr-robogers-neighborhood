// business logic

roboTranslator = function translator(number)  {
  let translation = []

  for (let index = 0; index <= number; index++) {
    if (index.toString().includes("3")) {
      translation.push("Won't you be my neighbor?");
    } else if (index.toString().includes("2")) {
      translation.push("Boop!");
    } else if (index.toString().includes("1")) {
      translation.push("Beep!");
    } else {
      translation.push(index);
    }
  }
  return translation
}

// user interface logic

$(document).ready(function() {
  $("form#input-form").submit(function(event) {
    event.preventDefault();
    const userInput = parseInt($("input#user-input").val());
    const translatedInput = roboTranslator(userInput);
    const userInputStringForm = translatedInput.toString();
    const cleanedUserInput = userInputStringForm.replace(/,/g,' ');

    $(".result").text(cleanedUserInput);
  });
});