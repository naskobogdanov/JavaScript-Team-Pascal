

var quiz = [{
  "question": "At Dartmouth College in 1964 John Kemeny and Thomas Kurtz invented .... ?",
  "choices": ["ALGOL", "BASIC", "FORTRAN","CHAIN"],
  "correct": "BASIC"
}, {
  "question": "Complete this quote “Computers are useless. They can only give you -------” (Pablo Picasso)",
  "choices": ["numbers", "pictures", "headaches, "answers"],
  "correct": "answers"
}, {
  "question": "Who invented C++ ?",
  "choices": ["Larry Wall", "Anders Hejlsberg", "Bjarne Stroustrup", "Alan Cooper"],
  "correct": "Bjarne Stroustrup"
}, {
  "question": "Which of these is not a functional programming language",
  "choices": ["F#", "Erlang", "Fortran", "Miranda"],
  "correct": "Fortran"
}, {
  "question": "Dylan, Erlang, Haskell and ML are examples of ... ?",
  "choices": ["web languages", "declarative languages", "functional languages", "visual languages"],
  "correct": "functional languages"
}, {
  "question": A true or false statement put into code that the programmer expects to always be true is an ...?",
  "choices": ["exception", "harness", "assertion", "expression"],
  "correct": "assertion"

}, {
  "question": "EBNF is ...",
  "choices": ["Extensible Book Notation Format", "a replacement for the SAX XML parser", "a syntax for defining grammar", "the leader of the free software foundation"],
  "correct": "a syntax for defining grammar"

}, {
  "question": "A section of code that responds to a particular interaction of the user with a gui control is called a ... ?",
  "choices": ["dispatch function", "event handler", "Control structure", "exception handler"],
  "correct": "event handler"

}, {
  "question": "RISC is ...?",
  "choices": ["a defensive programming style", "a web framework", "a threading library", "a CPU design strategy],
  "correct": "a CPU design strategy"

}, {
  "question": "You could use XSLT to ..?",
  "choices": ["speed up database queries", "encrypt passwords", "transform XML into HTML", "cache html pages"],
  "correct": "transform XML into HTML"

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
