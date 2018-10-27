import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './Components/contact/contact.component';
import { QuizComponent } from './Components/quiz/quiz.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { BlogComponent } from './Components/blog/blog.component';
import { AppBlogItemComponent } from './Components/app-blog-item/app-blog-item.component';
import { BlogItemTextComponent } from './Components/blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './Components/blog-item-image/blog-item-image.component';
import { BlogDetailsComponent } from './Components/blog-details/blog-details.component';


const appRoutes: Routes = [
     {path: '' , component: HomeComponent},
     { path: 'quiz', component: QuizComponent },
     { path: 'contact',  component: ContactComponent },
     { path: 'blog',   component: BlogComponent }, 
     { path: 'blog/details/:id',   component: BlogDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    QuizComponent,
    HomeComponent,
    BlogComponent,
    AppBlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    BlogDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
