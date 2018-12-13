import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

    questions: []
    index=0
    quizStarted=false
    currentAnswer = ''
    userAnswers = []
    showNexQuestionButton = true
    score=0
    time = 10
    progress = 1
    timeCounter
    quizFinished = false
    scoreHistory

    constructor() {

    }

    ngOnInit() {
        var quizContainer = document.getElementById("quizContainer");
        var loadingGif = document.querySelector(".loaderContainer");

        fetch('../../assets/questions.json')
            .then(response => response.json())
            .then(res => {
                this.questions = res;             
                quizContainer.classList.remove("invisible");
                loadingGif.remove();             

            });       
    }

    startQuiz(e){
        e.target.classList.add("invisible");
        this.quizStarted = true;
        this.timeCounter = this.startCounting();
    }

    answerClicked(answer,event){
       
        var answers = document.querySelectorAll(".list-group-item");
        answers.forEach( li=>{
            li.classList.remove('answerClicked');
        });
        event.target.classList.add("answerClicked");

        this.currentAnswer = answer;
    }

    nextQuestion(){          
        if(this.index <9){
            clearInterval(this.timeCounter);
            var answers = document.querySelectorAll(".list-group-item");
            answers.forEach( li=>{
                li.classList.remove('answerClicked');
            });          
           if(this.currentAnswer === this.questions[this.index]["correctAnswer"]){
               this.score++;
           }
           this.currentAnswer=''
            this.index++;
            this.progress++;
            this.time = 10;
            this.timeCounter = this.startCounting();
        }
            if(this.index == 9){
                this.showNexQuestionButton = false;
                // clearInterval(this.timeCounter);               
                
            }       
       
    }

    finishQuiz(){
        
        if( this.currentAnswer.length > 0 && this.currentAnswer === this.questions[this.index]["correctAnswer"]){
            this.score++;
        }
        console.log(this.userAnswers);
        console.log(`Twój wynik to ${this.score}`);

        this.quizStarted = false;
        this.quizFinished = true;
        clearInterval(this.timeCounter);

        var history;
       
      
        if(typeof(localStorage.getItem("scoreHistory")) === 'undefined'){
            history = [];
            localStorage.setItem("scoreHistory",JSON.stringify(history));
            this.scoreHistory = history;
        }
        else{
            var currentDate = this.createCurrentData()
            history = localStorage.getItem("scoreHistory");
            console.log(history);
            history = JSON.parse(history);
            history.unshift({date: currentDate, score:this.score});
        
            localStorage.setItem("scoreHistory",JSON.stringify(history)); 
          
        }

        this.scoreHistory = history;
      

    }

    startCounting=()=>{
        return(setInterval(()=>{
           if(this.time > 0){
               
            this.time--;
            
           }
           else{
               clearInterval(this.timeCounter);
              if(this.index <9){
                this.nextQuestion();
              }
              else{
                  this.finishQuiz();
              }
           }
        },1000))
    }

    createCurrentData(){
        let date = new Date()
        let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        let month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()

        let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
        let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()

        return `${day}-${month}-${date.getFullYear()} ${hour}:${minutes}`
    }

    reloadQuiz(){
        this.time=10;
        this.index=0;
        this.progress=1;
        this.quizStarted = true;
        this.quizFinished = false;
        this.showNexQuestionButton = true;
        this.timeCounter = this.startCounting();
        this.score=0;
    }

}


