import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IPhone } from './phones';
import {tap,catchError} from 'rxjs/operators';
import { IPosition } from '../Position/positions';
@Injectable({
  providedIn: 'root'
})
export class SmartPhoneServiceService {
  private phoneUrl='http://localhost:8080/App_Tracking_web/phones';
  private positionUrl='http://localhost:8080/App_Tracking_web/positions';
  constructor(private http:HttpClient) { }

    getPhones():Observable<IPhone[]>{
        return this.http.get<IPhone[]>(this.phoneUrl).pipe(
          tap(data=>console.log('All',JSON.stringify(data))),
          catchError(this.handleError)
        );
    }

    getPositions():Observable<IPosition[]>{
      return this.http.get<IPosition[]>(this.positionUrl);
    }

    private handleError(error:HttpErrorResponse){
      let errorMessage='';
      if(error.error instanceof ErrorEvent){
        errorMessage = `An Error occurred : ${error.error.message}`;
      }else{
        errorMessage=`Server returned code : ${error.status}, error message is :${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }
}
