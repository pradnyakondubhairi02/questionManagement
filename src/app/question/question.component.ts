import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question!: Question;
  @Input() index!: number;
  @Output() edit = new EventEmitter<number>();
    
  ngOnInit() {
  }

  public emitQuestionId(id: number): void {
    this.edit.emit(id);
  }
}
