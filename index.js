function Quiz(questions) {
    this.score = 0;
    this.questionIndex = 0;
    this.questions = questions;
}

Quiz.prototype.getQuesByInd = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.checkAns = function() {
    if (this.getQuesByInd().CorrectAns(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
return this.questionIndex === this.questions.length;
}

function Question (text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;   
}

Question.prototype.CorrectAns = function(choice) {
    return this.answer === choice;
}

function loadQuestions() {
    if (quiz.isEnded()) {
        showScores; 
    }
    else {
        var element = document.getElementById("question");
        element.innerHtml = quiz.getQuesByInd().text;

        var choices = quiz.getQuesByInd().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHtml = choices[i];
            handleOptionButton("btn" + i, choices[i]);
        }
    }

    showProgress();
}

function handleOptionButton(id, choice) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.checkOpAns(choice);
        loadQuestions();
    }
}

function showProgress() {
    var curQnum = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHtml = "Question" + curQnum + "of" + quiz.questions.length;
}

function showScores() {
    var gameOver = "<h1>Result</h1>";
    gameOver += "h2 id = 'score'> Your score: " + quiz.score + ". Your percentage is: " + (quiz.score/questions.length * 100) + "%" + "</h2>";
    element.innerHtml = gameOver;
}

var questions = [
    new Question("What of the following is the default value of an instance variable? ", ["null", "0", "Depends upon type of variable", "Not assigned"], "Depends upon type of variable"),
    new Question("Which of those allows duplicate elements? ", ["Set", "List", "All", "NOTA"], "List"),
    new Question("Which is used to connect to Database? ", ["php", "html", "js", "all"], "php"),
    new Question("Which of these is a bird ?", ["cat", "dog", "parrot", "cow"], "parrot"),
    new Question("Which is the biggest continent in the world? ", ["Asia", "Australia", "Europe", "North America"], "Asia"),
]

var quiz = new Quiz(questions);

loadQuestions;
