import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {environment} from '../../environments/environment';

const httpOptions = {
  params: new HttpParams(),
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': '6e0eeb81c3f04afd96fc4f5f7386caf3',
    'Api-Version': 'v2',
    'Ocp-Apim-Trace': 'true'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {


  private apiURLKudos = environment.apiUrlBackend + '/kudos';

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getKudos(): Observable<any> {
    return this.http.get(this.apiURLKudos, httpOptions).pipe(
      map(this.extractData));
  }


  addKudos (kudo): Observable<any> {
    console.log(kudo);
    return this.http.post<any>(this.apiURLKudos, JSON.stringify(kudo), httpOptions).pipe(
      catchError(this.handleError<any>('addProduct'))
    );
  }

  updateKudos (kudo): Observable<any> {
    return this.http.put(this.apiURLKudos, JSON.stringify(kudo), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${kudo}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteKudos (kudo): Observable<any> {

    const params: HttpParams = new HttpParams();
    params.set('pKey', kudo.receiver);
    httpOptions.params = params;
    return this.http.delete<any>(this.apiURLKudos + '/' + kudo.id, httpOptions).pipe(
      tap(_ => console.log(`deleted kudos id=${kudo.id}`)),
      catchError(this.handleError<any>('deleteKudos'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
