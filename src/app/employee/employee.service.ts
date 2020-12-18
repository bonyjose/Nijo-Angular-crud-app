import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiURL = "https://reqres.in";

						   

  httpOptions = {

  headers: new HttpHeaders({

    'Content-Type': 'application/json'

  })

  }
  constructor(private httpClient: HttpClient) { }

   

  getAll(): Observable<Employee[]> {
debugger;
  return this.httpClient.get<Employee[]>(this.apiURL + '/api/users?page=2')

  .pipe(

    catchError(this.errorHandler)

  )

  }

  errorHandler(error) {

    let errorMessage = '';

    if(error.error instanceof ErrorEvent) {

      errorMessage = error.error.message;

    } else {

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    }

    return throwError(errorMessage);

   }

}
