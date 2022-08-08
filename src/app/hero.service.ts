import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from './interfaces/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private url: string = "https://jipes.cz/heroes";
  
  constructor(private httpClient: HttpClient) { }

  fetchHeroes(): Observable<Hero[]>{
    return this.httpClient.get<Hero[]>(this.url);
  }
}

