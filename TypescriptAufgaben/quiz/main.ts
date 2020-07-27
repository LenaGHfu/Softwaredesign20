namespace quiz {


    let questions: Question[] = []
    main()



    function askQuestion(scoreKeeper: ScoreKeeper) {
        let currentQuestion: Question = questions[getRandomInt(questions.length)]
        let answer: string = prompt(currentQuestion.question);
        if (currentQuestion.checkAnswer(answer)) {
            scoreKeeper.correctAnswer()
            alert("Richtig!")
        } else {
            scoreKeeper.wrongAnswer()
            alert("Falsch!: \nrichtige Anwort: " + currentQuestion.answer)
        }

    }


    function initializeQuestions() {
        questions.push(new Question("Was ist 1+1?", "2"))
        questions.push(new Question("Was ist 2+1?", "3"))
        questions.push(new Question("Was ist 2+2?", "4"))
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    class ScoreKeeper {
        correct: number = 0
        wrong: number = 0

        constructor() {
        }

        getScore() {
            return this.wrong - this.correct
        }

        correctAnswer() {
            this.correct++
        }

        wrongAnswer() {
            this.wrong++
        }
    }


    class Question {
        private readonly _question: string
        private readonly _answer: string

        constructor(question: string, answer: string) {
            this._question = question;
            this._answer = answer;
        }

        get question(): string {
            return this._question;
        }

        get answer(): string {
            return this._answer;
        }

        checkAnswer(answer: string) {
            return answer === this._answer
        }
    }
    function main() {
        let scorekeeper :ScoreKeeper;
        initializeQuestions();
        askQuestion(scorekeeper);

    }

}
