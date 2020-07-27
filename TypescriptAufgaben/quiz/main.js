var quiz;
(function (quiz) {
    var questions = [];
    main();
    function main() {
        var scorekeeper;
        initializeQuestions();
        askQuestion(scorekeeper);
    }
    function askQuestion(scoreKeeper) {
        var currentQuestion = questions[getRandomInt(questions.length)];
        var answer = prompt(currentQuestion.question);
        if (currentQuestion.checkAnswer(answer)) {
            scoreKeeper.correctAnswer();
            alert("Richtig!");
        }
        else {
            scoreKeeper.wrongAnswer();
            alert("Falsch!: \nrichtig Anwort: " + currentQuestion.answer);
        }
    }
    function initializeQuestions() {
        questions.push(new Question("Was ist 1+1?", "2"));
        questions.push(new Question("Was ist 2+1?", "3"));
        questions.push(new Question("Was ist 2+2?", "4"));
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    var ScoreKeeper = /** @class */ (function () {
        function ScoreKeeper() {
            this.correct = 0;
            this.wrong = 0;
        }
        ScoreKeeper.prototype.getScore = function () {
            return this.wrong - this.correct;
        };
        ScoreKeeper.prototype.correctAnswer = function () {
            this.correct++;
        };
        ScoreKeeper.prototype.wrongAnswer = function () {
            this.wrong++;
        };
        return ScoreKeeper;
    }());
    quiz.ScoreKeeper = ScoreKeeper;
    var Question = /** @class */ (function () {
        function Question(question, answer) {
            this._question = question;
            this._answer = answer;
        }
        Object.defineProperty(Question.prototype, "question", {
            get: function () {
                return this._question;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Question.prototype, "answer", {
            get: function () {
                return this._answer;
            },
            enumerable: true,
            configurable: true
        });
        Question.prototype.checkAnswer = function (answer) {
            return answer === this._answer;
        };
        return Question;
    }());
    quiz.Question = Question;
})(quiz || (quiz = {}));
