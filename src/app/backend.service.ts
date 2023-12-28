import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { TimeEdit } from './TimeEdit';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private getKursListURL: string ='http://localhost:8080/restClient-1.0-SNAPSHOT/api/apa/events';
  private getTimeEditListURL: string = '';
  constructor(private HttpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   // Handle API errors
   handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  getKursList(): Observable <TimeEdit> {
    return this.HttpClient
    .get<TimeEdit>(this.getKursListURL)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  getTimeEdit(): Observable <TimeEdit> {
    return this.HttpClient
    .get<TimeEdit>(this.getTimeEditListURL)
    .pipe(
      retry(2),
      catchError(this.handleError) 
      ) 
  }
  postCanvasKalender(id: any, item: any): Observable <TimeEdit> {
    return this.HttpClient
    .put<TimeEdit>(this.getKursListURL + '/' + id, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
}
