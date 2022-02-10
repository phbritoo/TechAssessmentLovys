import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genres } from 'src/app/modules/genres.model';
import { Movie } from 'src/app/modules/movie.model';
import { MoviesApiService } from 'src/app/service/movies-api.service';
import { TvService } from 'src/app/service/tv.service';

@Component({
  selector: 'app-tv-trending',
  templateUrl: './tv-trending.component.html',
  styleUrls: ['./tv-trending.component.scss']
})
export class TvTrendingComponent implements OnInit {
  trending: Movie[] = [];
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
    private apiTvService: TvService,
    private apiMovieService: MoviesApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.page = this.route.snapshot.paramMap.get('page');
    this.getTrending(this.page);
  }

  getTrending(page: number): void {
    this.apiTvService.getTrending(page).subscribe((trending: any) => {
      this.trending = trending['results'];
      this.page = trending['page'];
      this.totalPages = trending['total_pages'];
    });
  }

  getMovieById(id: number): void {
    this.apiMovieService.getMovieDetails(id).subscribe((res: any) => {
      this.genres = res['genres'];
      this.details = res;
    });
  }
}
