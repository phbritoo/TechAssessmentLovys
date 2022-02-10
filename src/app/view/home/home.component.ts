import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details } from 'src/app/modules/details.model';
import { Genres } from 'src/app/modules/genres.model';
import { Movie } from 'src/app/modules/movie.model';
import { MoviesApiService } from 'src/app/service/movies-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popular: Movie[] = [];
  genres: Genres[] = [];
  details = {
    id: 0,
    title: '',
    overview: '',
    budget: 0,
    vote_average: 0,
  };

  page: any;
  totalPages: any;

  constructor(
    private apiService: MoviesApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.page = this.route.snapshot.paramMap.get('page');
    this.getPopular(this.page);
  }

  getPopular(page: number): void {
    this.apiService.getPopular(page).subscribe((popular: any) => {
      this.popular = popular['results'];
      this.page = popular['page'];
      this.totalPages = popular['total_pages'];
      console.log('###this.popular#####', this.popular);
    });
  }

  getMovieById(id: number): void {
    this.apiService.getMovieDetails(id).subscribe((res: any) => {
      this.genres = res['genres'];
      this.details = res;
      // this.overview = res.overview;
      // this.budget = res.budget;
      // this.vote_average = res.vote_average;

      console.log('########', this.genres);
      console.log('##RES######', res);
    });
  }
}
