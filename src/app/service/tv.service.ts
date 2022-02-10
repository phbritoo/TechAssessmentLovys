import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Movie } from '../modules/movie.model';

@Injectable({
  providedIn: 'root',
})
export class TvService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private key = environment.api_Key;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}
  getTrending(page: number): Observable<any> {
    console.log(`getTrending page: ${page}`);
    return this.http
      .get<any>(
        `${this.baseUrl}/trending/tv/week${this.key}&language=en-US&page=${page}`
      )
      .pipe(
        tap((_) => console.log('fetched trending')),
        catchError(this.handleError<any>('getTrending', []))
      );
  }

  getTopRated(page: number): Observable<any> {
    return this.http
      .get<any[]>(
        `${this.baseUrl}/tv/top_rated${this.key}&language=en-US&page=${page}`
      )
      .pipe(
        tap((_) => console.log('fetched trending')),
        catchError(this.handleError<any[]>('getTopRated', []))
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
