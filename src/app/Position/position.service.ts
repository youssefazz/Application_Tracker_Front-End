import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPosition } from './positions';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http:HttpClient) { 
  }
  positionBetweenDeuxDate(date1:Date,date2:Date):Observable<any>{
    return this.http.post("http://localhost:8080/App_Tracking_web/positions/date",{date1:date1,date2:date2});
  }

}
