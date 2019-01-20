import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Apt } from './apt';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AptService {

  private aptsUrl = 'https://aa-realestate.co.il/api/apt';  // URL to web api


  constructor(
    private http: HttpClient
  ) { }

  /** GET apts from the server */
  getApts (): Observable<Apt[]> {
    return this.http.get<Apt[]>(this.aptsUrl)
      .pipe(
        tap(_ => this.log('fetched apts')),
        catchError(this.handleError('getApts', []))
      );
  }

   /** GET hero by id. Will 404 if id not found */
   getApt(id: number): Observable<Apt> {
    const url = `${this.aptsUrl}/${id}`;
    return this.http.get<Apt>(url).pipe(
      tap(_ => this.log(`fetched apt id=${id}`)),
      catchError(this.handleError<Apt>(`getApt id=${id}`))
    );
  }


























  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
