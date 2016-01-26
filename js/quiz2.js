//var quiz = [{
//  "question": "What is the full form of SoftUni?",
//  "choices": ["Soft Uniform", "Software Unity", "Software University"],
//  "correct": "Software University"
//}, {
//  "question": "Who is the founder of Microsoft?",
//  "choices": ["Bill Gates", "Steve Jobs", "Steve Wozniak"],
//  "correct": "Bill Gates"
//}, {
//  "question": "1 byte = ?",
//  "choices": ["8 bits", "64 bits", "1024 bits"],
//  "correct": "8 bits"
//}, {
//  "question": "The C programming language was developed by?",
//  "choices": ["Brendan Eich", "Dennis Ritchie", "Guido van Rossum"],
//  "correct": "Dennis Ritchie"
//}, {
//  "question": "What does CC mean in emails?",
//  "choices": ["Carbon Copy", "Creative Commons", "other"],
//  "correct": "Carbon Copy"
//}];

var quiz = [{
  "question": "What’s the default cluster size in the NTFS file system under Windows?",
  "choices": ["2 KB", "4 KB", "16 KB", "256 KB"],
  "correct": "4 KB"
}, {
  "question": "What’s the key combination to bring up the task manager directly in Win 7/ Vista?",
  "choices": ["Ctrl+alt+del", "Ctrl+shift+esc", "Ctrl+f1", "Alt+Shift"],
  "correct": "Ctrl+shift+esc"
}, {
  "question": "What is the slowest type of memory?",
  "choices": ["RAM", "SWAP FILE", "ROM", "SSD"],
  "correct": "SWAP FILE"
}, {
  "question": "Which commonly used in programming symbol is usually missing on most keyboards?",
  "choices": ["Pipe", "Asterix", "Tilde", "Percentage"],
  "correct": "Pipe"
}, {
  "question": "For a long time advancement in microprocessor technologies is marked not by increasing frequency" +
  " but by decreasing manufacturing process, which leads to improved power efficiency and architecture." +
  " What is the latest by Intel (mass production)?",
  "choices": ["32nm", "22nm", "14nm", "10nm"],
  "correct": "14nm"
}, {
  "question": "We already have „Acne for dummies” and „Raising cattle for dummies”, but which is the first book of the series?",
  "choices": ["Windows for Dummies", "Macintosh for Dummies", "Dos for Dummies", "C++ for Dummies"],
  "correct": "Dos for Dummies"

}, {
  "question": "Which of the below is one of the most recent programming languages?",
  "choices": ["Swift", "Groovy", "Windows Power Shell", "Delphi"],
  "correct": "Swift"

}, {
  "question": "In Unix-based OS it is called terminal, how is it called in Windows?",
  "choices": ["Port", "Debugger", "Control Panel", "CMD"],
  "correct": "CMD"

}, {
  "question": "In RGB system red is 255, 0, 0. In CMYK it is 0, 100, 100, 0, how about HTML notation?",
  "choices": ["0.0.0", "ff0000", "ffffff", "009900"],
  "correct": "ff0000"

}, {
  "question": "What did retina display initially mean when the term was first marketed by Apple?",
  "choices": ["Higher pixel count", "Higher pixel density", "Higher contrast and brightness", "Better viewing angles"],
  "correct": "Higher pixel count"

}];


// define elements
var content = $("content"),
  questionContainer = $("question"),
  choicesContainer = $("choices"),
  scoreContainer = $("score"),
  submitBtn = $("submit");

// init vars
var currentQuestion = 0,
  score = 0,
  askingQuestion = true;

function $(id) { // shortcut for document.getElementById
  return document.getElementById(id);
}

function checkLevel(){

}

function askQuestion() {
  var choices = quiz[currentQuestion].choices,
    choicesHtml = "";

  // loop through choices, and create radio buttons
  for (var i = 0; i < choices.length; i++) {
    choicesHtml += "<input type='radio' name='quiz" + currentQuestion +
      "' id='choice" + (i + 1) +
      "' value='" + choices[i] + "'>" +
      " <label for='choice" + (i + 1) + "'>" + choices[i] + "</label><br>";
  }

  // load the question
  questionContainer.textContent = "Q" + (currentQuestion + 1) + ". " +
    quiz[currentQuestion].question;

  // load the choices
  choicesContainer.innerHTML = choicesHtml;

  // setup for the first time
  if (currentQuestion === 0) {
    scoreContainer.textContent = "Score: 0 right answers out of " +
      quiz.length + " possible.";
    submitBtn.textContent = "Submit Answer";
  }
}

function checkAnswer() {
  // are we asking a question, or proceeding to next question?
  if (askingQuestion) {
    submitBtn.textContent = "Next Question";
    askingQuestion = false;

    // determine which radio button they clicked
    var userpick,
      correctIndex,
      radios = document.getElementsByName("quiz" + currentQuestion);
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) { // if this radio button is checked
        userpick = radios[i].value;
      }

      // get index of correct answer
      if (radios[i].value == quiz[currentQuestion].correct) {
        correctIndex = i;
      }
    }

    // setup if they got it right, or wrong
    var labelStyle = document.getElementsByTagName("label")[correctIndex].style;
    labelStyle.fontWeight = "bold";
    if (userpick == quiz[currentQuestion].correct) {
      score++;
      labelStyle.color = "green";
    } else {
      labelStyle.color = "red";
    }

    scoreContainer.textContent = "Score: " + score + " right answers out of " +
      quiz.length + " possible.";
  } else { // move to next question
    // setting up so user can ask a question
    askingQuestion = true;
    // change button text back to "Submit Answer"
    submitBtn.textContent = "Submit Answer";
    // if we're not on last question, increase question number
    if (currentQuestion < quiz.length - 1) {
      currentQuestion++;
      askQuestion();
    } else {
      showFinalResults();
    }
  }
}

function showFinalResults() {
  content.innerHTML = "<h2>You've complited the quiz!</h2>" +
    "<h2>Below are your results:</h2>" +
    "<h2>" + score + " out of " + quiz.length + " questions, " +
    Math.round(score / quiz.length * 100) + "%<h2>";
}

window.addEventListener("load", askQuestion, false);
submitBtn.addEventListener("click", checkAnswer, false);