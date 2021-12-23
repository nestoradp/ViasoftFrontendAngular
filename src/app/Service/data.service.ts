import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:9087/api/v1/";

DevolverEstadoActual():Observable<any> {
 return this.http.get(this.baseUrl + "historyStatus/StatusByprovincia", {
    observe: 'response',
    responseType: "json"
});
}



}
