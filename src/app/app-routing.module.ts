import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresListComponent } from './view/genres-list/genres-list.component';
import { GenresComponent } from './view/genres/genres.component';
import { HomeComponent } from './view/home/home.component';
import { MovieSearchComponent } from './view/movie-search/movie-search.component';
import { MovieTopRatedComponent } from './view/movie-top-rated/movie-top-rated.component';
import { MovieTrendingComponent } from './view/movie-trending/movie-trending.component';
import { MovieUpcomingComponent } from './view/movie-upcoming/movie-upcoming.component';
import { TvTopComponent } from './view/tv-top/tv-top.component';
import { TvTrendingComponent } from './view/tv-trending/tv-trending.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'trending/:page', component: MovieTrendingComponent },
  { path: 'upcoming/:page', component: MovieUpcomingComponent },
  { path: 'top/:page', component: MovieTopRatedComponent },
  { path: 'tvTop/:page', component: TvTopComponent },
  { path: 'tvTrending/:page', component: TvTrendingComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'genres/:id/:name', component: GenresListComponent },
  { path: 'search', component: MovieSearchComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
