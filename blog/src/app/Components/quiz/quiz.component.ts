import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

    questions: []
    questionCount: 0
    time: 10
    quizInterval
    isQuizRunning
    index: 0
    isClicked


    constructor() {
        this.questionCount = 0;
        this.isQuizRunning = false;
        this.isClicked = false;
    }

    ngOnInit() {

        /*this.fetchQuestions();
        var startQuiz = document.getElementById("startQuiz");
        startQuiz.addEventListener('click', this.startQuiz);

        var answers = document.querySelectorAll(".list-group-item");

        var i = 0;
        for (i; answers.length; i++) {
            answers[i].addEventListener('click', this.choseAnswer);
        }*/
    }

    fetchQuestions = () => {/*

        var quizContainer = document.getElementById("quizContainer");
        var loadingGif = document.getElementById("loadingGif");

        fetch('../../assets/questions.json')
            .then(response => response.json())
            .then(res => {
                this.questions = res;
                //console.log("Pobrane pytania: ",this.questions[0].question);

                quizContainer.classList.remove("invisible");
                loadingGif.classList.add("invisible");


            });*/

    }
    startQuiz = () => {/*
        var progressCounter = document.getElementById("progressCounter");
        var timeCounter = document.getElementById("timeCounter");
        var startQuiz = document.getElementById("startQuiz");

        if (!this.isQuizRunning) {
            this.isQuizRunning = true;
            progressCounter.classList.remove("invisible");
            timeCounter.classList.remove("invisible");
            document.getElementById("answers").classList.remove("collapse");

            document.querySelector(".questionText").classList.remove("textCenter");

            document.querySelector(".quizHeader").classList.add("invisible");


            startQuiz.classList.add("invisible");
            //console.log(this.questions[this.questionCount]);

            this.showQuestion();
            this.quizInterval = this.startInterval();
        }*/
    }

    showQuestion = () => {/*
        var q = this.questions[this.questionCount]
        console.log("Typ: ", typeof (this.questionCount))
        console.log("Przesłane pytania: ", this.questions[this.questionCount]);
        document.getElementById("questionText").innerHTML = q.question;

        document.getElementById("a").innerHTML = q.answers[0];
        document.getElementById("b").innerHTML = q.answers[1];
        document.getElementById("c").innerHTML = q.answers[2];
        document.getElementById("d").innerHTML = q.answers[3];*/
    }

    startInterval = () => {/*
        var progressCounter = document.getElementById("progressCounter");
        var timeCounter = document.getElementById("timeCounter");
        return (setInterval(() => {
            console.log("Działa interwał");
            if (this.time > 0) {
                this.time = this.time - 1;
                timeCounter.innerHTML = this.time + "s";
                progressCounter.innerHTML = `Pytanie ${this.questionCount + 1} z 10`;
            }

            if (this.time <= 0) {
                this.questionCount = this.questionCount + 1;
                this.showQuestion();
                this.time = 10;
                progressCounter.innerHTML = this.questionCount + 1 + "/10";
                timeCounter.innerHTML = 10
            }
        }, 1000))*/
    }

    choseAnswer = (e) => {/*
        var progressCounter = document.getElementById("progressCounter");
        var timeCounter = document.getElementById("timeCounter");

        if (!this.isClicked) {
            this.isClicked = true;

            clearInterval(this.quizInterval);
            var userAnswer = e.target.textContent;

            if (userAnswer == this.questions[this.questionCount].correctAnswer) {
                e.target.style.backgroundColor = "green";


                var currentResult = parseInt(localStorage.getItem("result")) + 1;
                localStorage.setItem("result", currentResult)


            } else {
                e.target.style.backgroundColor = "red";
            }

            if (this.questionCount < 9) {

                clearInterval(this.quizInterval);
                this.time = 11;
                this.quizInterval = this.startInterval();


                setTimeout(() => {
                    this.showQuestion();
                    this.questionCount = this.questionCount + 1;


                    progressCounter.innerHTML = `Pytanie ${this.questionCount} z 10`;
                    e.target.removeAttribute("style");

                    this.isClicked = false;

                }, 400);

            } else {
                this.time = 11;
                this.isClicked = true;
                setTimeout(function () {
                    var summary = localStorage.getItem("result");
                    document.querySelector(".score").innerHTML = "Udało Ci się ukończyć Quiz ! Twój wynik to : " + summary;
                    e.target.removeAttribute("style");

                    //resultHistory = JSON.parse(localStorage.getItem("resultHistory"));


                    var date = new Date();

                    /*resultHistory.unshift({
                        date: date.getDate() + "." + date.getMonth() + "." + date.getFullYear() + "/ " +
                            date.getHours() + ":" + (date.getMinutes() > 10 ? date.getMinutes() : "0" + date.getMinutes())+ ":" + (date.getSeconds() > 10 ? date.getSeconds() : "0" + date.getSeconds()),
                        score: summary
                    });

                    localStorage.setItem("resultHistory", JSON.stringify(resultHistory));
                    console.log(localStorage.getItem("resultHistory"));

                    //document.querySelector(".questionText").classList.add("invisible");
                    // document.querySelector(".answers").classList.add("invisible");

                    //showScoreHistory();

                    document.getElementById("scoreHistory").classList.remove("invisible");

                }, 500);

            }

        }*/
    }
}


