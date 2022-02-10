import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs';
import { FirebaseService } from 'src/app/service/firebase.service';
import { MoviesApiService } from 'src/app/service/movies-api.service';

@Component({
  selector: 'app-movie-nav-bar',
  templateUrl: './movie-nav-bar.component.html',
  styleUrls: ['./movie-nav-bar.component.scss'],
})
export class MovieNavBarComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>();

  genreslist: any;

  constructor(
    private apiService: MoviesApiService,
    private route: ActivatedRoute,
    public firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.getGenres();
  }
  logout() {
    this.firebaseService.logout();
    this.isLogout.emit();
  }

  getGenres() {
    this.apiService
      .getGenres()
      .pipe(delay(1000))
      .subscribe((res: any) => {
        this.genreslist = res.genres;
      });
  }

  // getMovieById(id: number): void {
  //   this.apiService.getMovieDetails(id).subscribe((res: any) => {
  //     this.genres = res['genres'];
  //     this.details = res;
  //   });
  // }
}
