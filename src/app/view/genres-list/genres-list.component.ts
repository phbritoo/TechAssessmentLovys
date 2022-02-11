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
  title: string | undefined;
  public id: number | undefined;

  currentMovies?: Movie[];
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
    this.apiService.getGenreById(id, page).subscribe((res: any) => {
      this.currentMovies = res['results'];
      this.page = res['page'];
      this.totalPages = res['total_pages'];
    });
  }
}
