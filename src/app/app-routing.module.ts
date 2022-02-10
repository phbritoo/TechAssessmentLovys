import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { MoviePopularComponent } from './view/movie-popular/movie-popular.component';
import { MovieTrendingComponent } from './view/movie-trending/movie-trending.component';
import { SingupComponent } from './view/singup/singup.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home/:page', component: HomeComponent },
  { path: 'trending/:page', component: MovieTrendingComponent },
  { path: 'latest/:page', component: MoviePopularComponent },
  { path: 'singup', component: SingupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
