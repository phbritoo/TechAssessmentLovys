import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/modules/movie.model';
import { MoviesApiService } from 'src/app/service/movies-api.service';

@Component({
  selector: 'app-movie-popular',
  templateUrl: './movie-popular.component.html',
  styleUrls: ['./movie-popular.component.scss'],
})
export class MoviePopularComponent implements OnInit {
  latestReleases: Movie[] = [];
  page: any;
  totalPages: number = 0;

  constructor(
    private apiService: MoviesApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.page = this.route.snapshot.paramMap.get('page');
    this.getLatestReleases(this.page);
  }

  getLatestReleases(page: number): void {
    this.apiService.getLatestReleases(page).subscribe((latestReleases: any) => {
      this.latestReleases = latestReleases['results'];
      this.page = latestReleases['page'];
      this.totalPages = latestReleases['total_pages'];
    });
  }
}
