// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { QuestionListComponent } from './question-list/question-list.component';
// import { QuestionComponent } from './question/question.component';
// import { QuestionService } from './question.service';

// @NgModule({
//   declarations: [
//     AppComponent,
//     QuestionListComponent,
//     QuestionComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [QuestionService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
// import { QuestionListComponent } from './question-list/question-list.component';
// import { QuestionComponent } from './question/question.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     QuestionListComponent,
//     QuestionComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionComponent } from './question/question.component'; // Import your Question component
import { QuestionService } from './question.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionComponent // Declare the Question component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
