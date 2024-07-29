// import { Component, OnInit } from '@angular/core';
// import { QuestionService } from '../question.service';
// import { Question } from '../question.model';

// @Component({
//   selector: 'app-question-list',
//   templateUrl: './question-list.component.html',
//   styleUrls: ['./question-list.component.css']
// })
// export class QuestionListComponent implements OnInit {

//   questions: Question[] = [];

//   constructor(private questionService: QuestionService) { }

//   ngOnInit(): void {
//     this.questionService.getQuestions().subscribe((questions) => {
//       this.questions = questions;
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  questions: Question[] = [];
  title: string = '';
  desc: string = '';
  idx: number = -1;

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.questionService.getQuestions().subscribe((questions: Question[]) => {
      this.questions = questions;
    });
  }

  addQuestion(ind: number) {
    const question: Question = { id: this.idx, title: this.title, description: this.desc };

    if (ind !== -1) {
      this.questionService.updateQuestion(this.questions[ind].id, question).subscribe(() => {
        this.getQuestions();
        this.resetForm();
      });
    } else {
      this.questionService.addQuestion(question).subscribe(() => {
        this.getQuestions();
        this.resetForm();
      });
    }
  }

  editQuestion(id: number) {
    const ids = this.questions.map((q) => q.id);
    const ind = ids.indexOf(id);
    if (ind > -1) {
      this.title = this.questions[ind].title;
      this.desc = this.questions[ind].description;
      this.idx = ind;
    }
  }

  deleteQuestion(id: number) {
    this.questionService.deleteQuestion(id).subscribe(() => {
      this.getQuestions();
    });
  }

  resetForm() {
    this.title = '';
    this.desc = '';
    this.idx = -1;
  }
}
