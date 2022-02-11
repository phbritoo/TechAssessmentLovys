import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details } from 'src/app/modules/details.model';
import { Genres } from 'src/app/modules/genres.model';
import { Movie } from 'src/app/modules/movie.model';
import { MoviesApiService } from 'src/app/service/movies-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  @Input() movies?: Movie[];
  page: any;
  totalPages: any;
  currentGenres?: Genres[];
  currentDetails: Details = {
    id: '',
    overview: '',
    title: '',
    vote_average: '',
  };

  constructor(
    private apiService: MoviesApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.page = this.route.snapshot.paramMap.get('page');
  }
  getMovieById(id?: any): void {
    this.apiService.getMovieDetails(id).subscribe((res: any) => {
      this.currentGenres = res['genres'];
      this.currentDetails = res;
    });
  }
}
