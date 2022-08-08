import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  username: string = "";

  @ViewChild('username') usernameKey!: ElementRef;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  startQuiz() :void{
    localStorage.setItem("name", this.usernameKey.nativeElement.value); 
  }

}
