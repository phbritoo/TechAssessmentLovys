import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genres } from 'src/app/modules/genres.model';
import { Movie } from 'src/app/modules/movie.model';
import { MoviesApiService } from 'src/app/service/movies-api.service';

@Component({
  selector: 'app-movie-trending',
  templateUrl: './movie-trending.component.html',
  styleUrls: ['./movie-trending.component.scss'],
})
export class MovieTrendingComponent implements OnInit {
  currentMovies?: Movie[];
  page: any;
  totalPages: any;

  constructor(
    private apiService: MoviesApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.page = this.route.snapshot.paramMap.get('page');
    this.getMovies(this.page);
  }
  getMovies(page: number): void {
    this.apiService.getTrending(page).subscribe((response: any) => {
      this.currentMovies = response['results'];
      this.page = response['page'];
      this.totalPages = response['total_pages'];
    });
  }
}
