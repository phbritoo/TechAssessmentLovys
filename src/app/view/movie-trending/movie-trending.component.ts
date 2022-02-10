import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/modules/movie.model';
import { MoviesApiService } from 'src/app/service/movies-api.service';

@Component({
  selector: 'app-movie-trending',
  templateUrl: './movie-trending.component.html',
  styleUrls: ['./movie-trending.component.scss'],
})
export class MovieTrendingComponent implements OnInit {
  title: string = 'Trending this wek';
  trending: Movie[] = [];
  page: any;
  totalPages: number = 0;

  constructor(
    private apiService: MoviesApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.page = this.route.snapshot.paramMap.get('page');
    this.getTrending(this.page);
  }

  getTrending(page: number): void {
    this.apiService.getTrending(page).subscribe((trending: any) => {
      this.trending = trending['results'];
      this.page = trending['page'];
      this.totalPages = trending['total_pages'];
    });
  }
}
