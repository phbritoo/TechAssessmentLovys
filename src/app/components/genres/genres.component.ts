import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { MoviesApiService } from 'src/app/service/movies-api.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  genreslist: any;
  public loading = false;

  constructor(private apiService: MoviesApiService) {}

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres() {
    this.loading = true;
    this.apiService
      .getGenres()
      .subscribe((res: any) => {
        this.genreslist = res.genres;
        this.loading = false;
      });
  }
}
