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
  public loading = false;

  constructor(
    private apiService: MoviesApiService,
    private route: ActivatedRoute,
    public firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.getGenres();
  }
  logout() {
    this.loading = true;
    this.firebaseService.logout();
    this.loading = false;
    this.isLogout.emit();
  }

  getGenres() {
    this.apiService.getGenres().subscribe((res: any) => {
      this.genreslist = res.genres;
    });
  }
}
