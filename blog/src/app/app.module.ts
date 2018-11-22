import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
import { NavigationComponent } from './Components/navigation/navigation.component';
import {DataService} from './Services/data-service.service';
import { FilterPostsComponent } from './Components/filter-posts/filter-posts.component'
import {FilterPipe} from './pipes';
import { BlogHomeComponent } from './Components/blog-home/blog-home.component';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { TextFormatDirective } from './text-format.directive';



const appRoutes: Routes = [
     {path: '' , component: HomeComponent},
     { path: 'quiz', component: QuizComponent },
     { path: 'contact',  component: ContactComponent },
     { path: 'blog',   component: BlogHomeComponent }, 
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
    BlogDetailsComponent,
    NavigationComponent,
    FilterPostsComponent,
    FilterPipe,
    BlogHomeComponent,
    SearchBarComponent,
    TextFormatDirective,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
