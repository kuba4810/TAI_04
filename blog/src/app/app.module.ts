import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './Components/contact/contact.component';
import { QuizComponent } from './Components/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
