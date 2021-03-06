import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { MovieNavBarComponent } from './components/movie-nav-bar/movie-nav-bar.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MovieTrendingComponent } from './view/movie-trending/movie-trending.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment.prod';
import { FirebaseService } from './service/firebase.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieTopRatedComponent } from './view/movie-top-rated/movie-top-rated.component';
import { MovieUpcomingComponent } from './view/movie-upcoming/movie-upcoming.component';
import { TvTrendingComponent } from './view/tv-trending/tv-trending.component';
import { TvTopComponent } from './view/tv-top/tv-top.component';
import { GenresListComponent } from './view/genres-list/genres-list.component';
import { GenresComponent } from './components/genres/genres.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieNavBarComponent,
    MovieSearchComponent,
    MovieTrendingComponent,
    MovieTopRatedComponent,
    MovieUpcomingComponent,
    TvTrendingComponent,
    TvTopComponent,
    GenresListComponent,
    GenresComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.rectangleBounce,
      backdropBackgroundColour: 'rgba(255,255,255,0.5)',
      backdropBorderRadius: '10px',
      primaryColour: '#000000',
      secondaryColour: '#000000',
      tertiaryColour: '#000000',
    }),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
