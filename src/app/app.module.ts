import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { MovieNavBarComponent } from './view/movie-nav-bar/movie-nav-bar.component';
import { MoviePopularComponent } from './view/movie-popular/movie-popular.component';
import { MovieSearchComponent } from './view/movie-search/movie-search.component';
import { MovieTrendingComponent } from './view/movie-trending/movie-trending.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment.prod';
import { FirebaseService } from './service/firebase.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SingupComponent } from './view/singup/singup.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieNavBarComponent,
    MoviePopularComponent,
    MovieSearchComponent,
    MovieTrendingComponent,
    SingupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
