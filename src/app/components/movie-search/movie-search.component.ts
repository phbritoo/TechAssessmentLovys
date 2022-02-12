import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Genres } from 'src/app/modules/genres.model';
import { Movie } from 'src/app/modules/movie.model';
import { MoviesApiService } from 'src/app/service/movies-api.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
})
export class MovieSearchComponent implements OnInit {
  searchStr: any;
  searchRes: any[] = [];
  page: any;
  totalPages: any;
  searchEmpty: boolean = false;
  public loading = false;

  constructor(
    private apiService: MoviesApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.page = this.route.snapshot.paramMap.get('page');
  }
  searchBar = new FormGroup({
    searchStr: new FormControl(null, [Validators.required]),
  });
  searchMovies() {
    this.loading = true;
    this.apiService.searchMovies(this.searchStr).subscribe((res) => {
      this.searchRes = res['results'];
      if (this.searchRes.length === 0) {
        this.searchEmpty = true;
        this.loading = false;
      } else {
        this.searchEmpty = false;
        this.loading = false;
      }
    });
  }
}
