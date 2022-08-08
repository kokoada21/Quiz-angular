import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username: string = "";
  
  constructor() { }

  // post(name: string): void{
  //   this.username = name;
  // }

  // fetchUsername(): Observable<string> {
  //   console.log("ulozeno bitch");
  //   return this.username;
  // }
}
