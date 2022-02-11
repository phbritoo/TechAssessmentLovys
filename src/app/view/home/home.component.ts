import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/modules/movie.model';
import { MoviesApiService } from 'src/app/service/movies-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
    this.apiService.getPopular(page).subscribe((response: any) => {
      this.currentMovies = response['results'];
      this.page = response['page'];
      this.totalPages = response['total_pages'];
    });
  }
}
