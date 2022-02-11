import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/modules/movie.model';
import { TvService } from 'src/app/service/tv.service';

@Component({
  selector: 'app-tv-trending',
  templateUrl: './tv-trending.component.html',
  styleUrls: ['./tv-trending.component.scss'],
})
export class TvTrendingComponent implements OnInit {
  currentMovies?: Movie[];
  page: any;
  totalPages: any;

  constructor(private apiService: TvService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.page = this.route.snapshot.paramMap.get('page');
    this.getMovies(this.page);
  }
  getMovies(page: number): void {
    this.apiService.getTrending(page).subscribe((response: any) => {
      this.currentMovies = response['results'];
      this.page = response['page'];
      this.totalPages = response['total_pages'];
    });
  }
}
