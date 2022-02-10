import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { delay } from 'rxjs';
import { Genres } from 'src/app/modules/genres.model';
import { Movie } from 'src/app/modules/movie.model';
import { MoviesApiService } from 'src/app/service/movies-api.service';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.scss'],
})
export class GenresListComponent implements OnInit {
  // moviesGenre = {
  //   id: '',
  //   title: '',
  //   release_date: '',
  //   poster_path: '',
  //   // vote_average: 0,
  // };
  // moviesGenre: any[] = [];
  title: string | undefined;
  public id: number | undefined;


  topRated: Movie[] = [];
  genres: Genres[] = [];
  details = {
    id: 0,
    title: '',
    overview: '',
    budget: 0,
    vote_average: 0,
    release_date:''
  };
  searchStr: any;
  searchRes: any[] = [];
  page: any;
  totalPages: any;
  constructor(
    private apiService: MoviesApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.title = params['name'];
      this.getMoviesGenre(this.id, this.page);
    });
  }

  getMoviesGenre(id: any, page: number) {
    this.apiService
      .getGenreById(id, page)
      .subscribe((res: any) => {
        this.topRated = res['results'];
        this.page = res['page'];
        this.totalPages = res['total_pages'];
      });
  }

  getMovieById(id: number): void {
    this.apiService.getMovieDetails(id).subscribe((res: any) => {
      this.genres = res['genres'];
      this.details = res;
    });
  }
}
