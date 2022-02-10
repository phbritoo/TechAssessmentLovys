import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/service/firebase.service';
import { MoviesApiService } from 'src/app/service/movies-api.service';

@Component({
  selector: 'app-movie-nav-bar',
  templateUrl: './movie-nav-bar.component.html',
  styleUrls: ['./movie-nav-bar.component.scss'],
})
export class MovieNavBarComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>();
  constructor(
    private apiService: MoviesApiService,
    private route: ActivatedRoute,
    public firebaseService: FirebaseService
  ) {}

  ngOnInit() {}
  logout() {
    this.firebaseService.logout();
    this.isLogout.emit();
  }
}
