import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { Genres } from 'src/app/modules/genres.model';
import { Movie } from 'src/app/modules/movie.model';
import { MoviesApiService } from 'src/app/service/movies-api.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
})
export class MovieSearchComponent implements OnInit {
  popular: Movie[] = [];
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
  genreslist: any;
  searchEmpty: boolean = false;
  constructor(
    private apiService: MoviesApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.page = this.route.snapshot.paramMap.get('page');
  }

  getMovieById(id: number): void {
    this.apiService.getMovieDetails(id).subscribe((res: any) => {
      this.genres = res['genres'];
      this.details = res;
    });
  }

  searchMovies() {
    this.apiService.searchMovies(this.searchStr).subscribe((res) => {
      this.searchRes = res['results'];
      console.log('REST', this.searchRes);
      if (this.searchRes.length === 0) {
        this.searchEmpty = true;
      } else {
        this.searchEmpty = false;
      }
      console.log(this.searchEmpty);
    });
  }
}
