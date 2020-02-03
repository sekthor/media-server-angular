import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ShowComponent } from './show/show.component';
import { ShowsComponent } from './shows/shows.component';
import { BooksComponent } from './books/books.component';


const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'shows', component: ShowsComponent},
  { path: 'show/:id', component: ShowComponent},
  { path: 'books', component: BooksComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: LoginComponent }
  //{ path: '', redirectTo: '/movies', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
