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
  constructor(private apiService: MoviesApiService) {}

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres() {
    this.apiService
      .getGenres()
      .pipe(delay(1000))
      .subscribe((res: any) => {
        this.genreslist = res.genres;
      });
  }
}
