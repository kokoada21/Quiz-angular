import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient: HttpClient) { }

  fetchQuestionsJson(): Observable<any>{
    return this.httpClient.get<any>("assets/questions.json");
  }
}
