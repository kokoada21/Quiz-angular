import { Component, Input, OnInit } from '@angular/core';
import { count, interval } from 'rxjs';
import { QuestionService } from '../service/question.service';
import { ChangeBgDirective } from '../change-bg.directive';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {  
  public username?: string ;
  public questionList?: any = [] ;
  public currentQuestion: number = 0;
  public points: number = 0;
  counter: number = 60; 
  correctAnswers: number = 0;
  wrongAnswers: number = 0;
  interval$: any;
  progress: string = "10";
  isQuizCompleted: boolean = false;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.getUsernameFromLocalStorage();
    this.getQuestions();
    this.startCounter();
  }

  getUsernameFromLocalStorage(): void {
      this.username = localStorage.getItem("name")!;
  }

  getQuestions(): void {
    this.questionService.fetchQuestionsJson()
    .subscribe(response => this.questionList = response.questions);
  }

  nextQuestion(): void {
    if(this.currentQuestion < this.questionList.length-1){
      this.currentQuestion++;
      this.resetCounter();
      this.getProgressPercent();
    }else{
      this.isQuizCompleted = true;
    }
  }

  previousQuestion(): void {
    if(this.currentQuestion > 0){
      this.currentQuestion--;
      this.resetCounter();
      this.getProgressPercent();
    }
  }

  selectAnswer(question: any): void{
    if(question.correct){
      this.pointHandler(10);
      this.correctAnswers++;
      setTimeout(() => {
        this.nextQuestion();
      }, 1000);
    }else{
      this.pointHandler(-10);
      this.wrongAnswers++;
      setTimeout(() => {
        this.nextQuestion();
      }, 1000);
    }
  }
  
  pointHandler(incomingPoints: number){
    let result:number = this.points + incomingPoints;  
    if(result >= 0){
        this.points = result;
      }
  }

  startCounter(): void{
    this.interval$ = interval(1000)
    .subscribe(val =>{
      this.counter--;
      if(this.counter === 0){
        this.nextQuestion();
        this.pointHandler(-10);
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }

  stopCounter(): void{
    this.interval$.unsubscribe();
    this.counter=0;
  }

  resetCounter(): void{
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
    this.getProgressPercent();
  }

  resetQuiz(): void {
    this.resetCounter();
    this.getQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.wrongAnswers = 0;
    this.correctAnswers = 0;   
    this.progress = "10";
    this.isQuizCompleted = false; 
  }

  getProgressPercent(){
    this.progress = (((this.currentQuestion+1)/this.questionList.length)*100).toString();
    return this.progress;
  }
}
