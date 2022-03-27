import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { IOMBDResponse } from '../ombdresponse';

@Injectable({
  providedIn: 'root'
})
export class OmbdApiService {

  private _siteURL="https://www.ombdapi.com";
  private _key='?apikey=63455f5a&t=';
  constructor(private _http:HttpClient) { }

  getMovieData(movieName: string): Observable<IOMBDResponse> {
    return this._http.get<IOMBDResponse>(this._siteURL + this._key + movieName)
    .pipe(
      tap(data => console.log('Moviedata/error' + JSON.stringify(data))
      ),
      catchError(this.handleError)
    );
  }

  private handleError(err:HttpErrorResponse) {
    console.log('OmbdApiService: ' +err.message);
    return throwError(err.message);
  }
}
