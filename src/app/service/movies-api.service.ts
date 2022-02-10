import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Movie } from '../modules/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private key = environment.api_Key;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getLatestReleases(page: number): Observable<Movie[]> {
    return this.http
      .get<any[]>(
        `${this.baseUrl}/discover/movie${this.key}&sort_by=release_date.desc&primary_release_date.lte=2020-12-30&include_adult=false&include_video=false&page=${page}`
      )
      .pipe(
        tap((_) => console.log('fetched trending')),
        catchError(this.handleError<any[]>('getLatestReleases', []))
      );
  }
  getTrending(page: number): Observable<Movie[]> {
    console.log(`getTrending page: ${page}`);
    return this.http
      .get<Movie[]>(
        `${this.baseUrl}/trending/movie/week${this.key}&page=${page}`
      )
      .pipe(
        tap((_) => console.log('fetched trending')),
        catchError(this.handleError<Movie[]>('getTrending', []))
      );
  }

  getPopular(page: number): Observable<Movie[]> {
    console.log(`getPopular page: ${page}`);

    return this.http
      .get<Movie[]>(`${this.baseUrl}/movie/popular${this.key}&page=${page}`)
      .pipe(
        tap((_) => console.log('fetched popular')),
        catchError(this.handleError<Movie[]>('getPopular', []))
      );
  }

  getMovieDetails(id: number): Observable<Movie[]> {
    console.log(`getMovieDetails id: ${id}`);
    return this.http
      .get<Movie[]>(
        `${this.baseUrl}/movie/${id}${this.key}&append_to_response=credits`
      )
      .pipe(
        tap((_) => console.log('fetched movie details')),
        catchError(this.handleError<Movie[]>('getMovieDetails', []))
      );
  }

  getPeopleDetails(id: number): Observable<any[]> {
    console.log(`getMovieDetails id: ${id}`);
    return this.http
      .get<any[]>(
        `${this.baseUrl}/person/${id}${this.key}&append_to_response=combined_credits`
      )
      .pipe(
        tap((_) => console.log('fetched person details')),
        catchError(this.handleError<any[]>('getPersonDetails', []))
      );
  }
  getTvDetails(id: number): Observable<any[]> {
    return this.http
      .get<any[]>(
        `${this.baseUrl}/tv/${id}${this.key}&append_to_response=credits`
      )
      .pipe(
        tap((_) => console.log('fetched tv details')),
        catchError(this.handleError<any[]>('getTvDetails', []))
      );
  }

  searchMulti(term: string): Observable<any> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http
      .get<any>(`${this.baseUrl}/search/multi/${this.key}&query=${term}`)
      .pipe(
        tap((x: any) =>
          x.length
            ? console.log(`found results matching "${term}"`)
            : console.log(`no results matching "${term}"`)
        ),
        catchError(this.handleError<any>('searchMulti', []))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
