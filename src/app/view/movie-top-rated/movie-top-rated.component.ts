import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genres } from 'src/app/modules/genres.model';
import { Movie } from 'src/app/modules/movie.model';
import { MoviesApiService } from 'src/app/service/movies-api.service';

@Component({
  selector: 'app-movie-top-rated',
  templateUrl: './movie-top-rated.component.html',
  styleUrls: ['./movie-top-rated.component.scss'],
})
export class MovieTopRatedComponent implements OnInit {
  topRated: Movie[] = [];
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
    this.getTopRated(this.page);
  }

  getTopRated(page: number): void {
    this.apiService.getTopRated(page).subscribe((topRated: any) => {
      this.topRated = topRated['results'];
      this.page = topRated['page'];
      this.totalPages = topRated['total_pages'];
    });
  }

  getMovieById(id: number): void {
    this.apiService.getMovieDetails(id).subscribe((res: any) => {
      this.genres = res['genres'];
      this.details = res;
    });
  }

}
