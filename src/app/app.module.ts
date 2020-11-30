import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooksComponent } from './features/books/books.component';
import { BookDetailComponent } from './features/books-detail/books-detail.component';
import { MoviesComponent } from './features/movies/movie.component';
import { MovieDetailComponent } from './features/movies-detail/movies-detail.component';
import { ApplicationComponent } from './features/apps/apps.component';
import { AppDetailComponent } from './features/apps-detail/apps-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,
    MoviesComponent,
    MovieDetailComponent,
    ApplicationComponent,
    AppDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
