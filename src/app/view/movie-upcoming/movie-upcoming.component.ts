import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genres } from 'src/app/modules/genres.model';
import { Movie } from 'src/app/modules/movie.model';
import { MoviesApiService } from 'src/app/service/movies-api.service';

@Component({
  selector: 'app-movie-upcoming',
  templateUrl: './movie-upcoming.component.html',
  styleUrls: ['./movie-upcoming.component.scss'],
})
export class MovieUpcomingComponent implements OnInit {
  upcoming: Movie[] = [];
  genres: Genres[] = [];
  details = {
    id: 0,
    title: '',
    overview: '',
    budget: 0,
    vote_average: 0,
  };
  searchStr: any;
  searchRes: any[] = [];
  page: any;
  totalPages: any;
  constructor(
    private apiService: MoviesApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.page = this.route.snapshot.paramMap.get('page');
    this.getUpcoming(this.page);
  }

  getUpcoming(page: number): void {
    this.apiService.getUpcoming(page).subscribe((upcoming: any) => {
      this.upcoming = upcoming['results'];
      this.page = upcoming['page'];
      this.totalPages = upcoming['total_pages'];
    });
  }

  getMovieById(id: number): void {
    this.apiService.getMovieDetails(id).subscribe((res: any) => {
      this.genres = res['genres'];
      this.details = res;
    });
  }
}
