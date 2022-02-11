import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/modules/movie.model';
import { TvService } from 'src/app/service/tv.service';

@Component({
  selector: 'app-tv-top',
  templateUrl: './tv-top.component.html',
  styleUrls: ['./tv-top.component.scss'],
})
export class TvTopComponent implements OnInit {
  currentMovies?: Movie[];
  page: any;
  totalPages: any;

  constructor(private apiService: TvService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.page = this.route.snapshot.paramMap.get('page');
    this.getMovies(this.page);
  }
  getMovies(page: number): void {
    this.apiService.getTopRated(page).subscribe((response: any) => {
      this.currentMovies = response['results'];
      this.page = response['page'];
      this.totalPages = response['total_pages'];
    });
  }
}
