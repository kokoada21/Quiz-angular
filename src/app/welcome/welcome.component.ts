import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  username: string = "";

  @ViewChild('username') usernameKey!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  startQuiz() :void{
    localStorage.setItem("name", this.usernameKey.nativeElement.value); 
  }

}
