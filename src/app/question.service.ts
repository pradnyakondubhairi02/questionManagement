// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { Question } from './question.model';
// import { HttpClient } from '@angular/common/http';
// @Injectable({
//   providedIn: 'root'
// })
// export class QuestionService {

//   private questions: Question[] = [
//     { id: 1, title: 'What is Angular?', description: 'Angular is a platform for building mobile and desktop web applications.' },
//     { id: 2, title: 'What is TypeScript?', description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.' },
//   ];

//   constructor() { }

//   getQuestions(): Observable<Question[]> {
//     return of(this.questions);
//   }

//   addQuestion(question: Question): void {
//     this.questions.push(question);
//   }
// }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Question } from './question.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class QuestionService {
//   private apiUrl = 'http://localhost:3000/questions';

//   constructor(private http: HttpClient) {}

//   getQuestions(): Observable<Question[]> {
//     return this.http.get<Question[]>(this.apiUrl);
//   }

//   addQuestion(question: Question): Observable<Question> {
//     return this.http.post<Question>(this.apiUrl, question);
//   }

//   updateQuestion(id: number, question: Question): Observable<any> {
//     return this.http.put(`${this.apiUrl}/${id}`, question);
//   }

//   deleteQuestion(id: number): Observable<any> {
//     return this.http.delete(`${this.apiUrl}/${id}`);
//   }
// }
// question.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = 'http://localhost:3000/questions';

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.apiUrl);
  }

  addQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.apiUrl, question, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updateQuestion(id: number, question: Question): Observable<Question> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Question>(url, question, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteQuestion(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}


