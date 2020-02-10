import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { HeaderComponent } from './header/header.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ShowComponent } from './show/show.component';
import { SeasonComponent } from './season/season.component';
import { EpisodeComponent } from './episode/episode.component';
import { MediaDetailComponent } from './media-detail/media-detail.component';
import { ShowsComponent } from './shows/shows.component';
import { MediaListComponent } from './media-list/media-list.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { SearchComponent } from './search/search.component';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    ShowComponent,
    SeasonComponent,
    EpisodeComponent,
    MediaDetailComponent,
    ShowsComponent,
    MediaListComponent,
    BooksComponent,
    BookComponent,
    SearchComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
