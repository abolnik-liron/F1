import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
@Injectable()
export class MainService {
  baseApi:string = "https://ergast.com/api";
  /**
   * Constructor
   * @param http HttpClient used to make http requests
   */
  constructor(private http: HttpClient) { }

    /**
   * Get list of values according to the key sent
   * @param key the key to look for
   */
  getListData(key,year?): Observable<any[]> {
    let params:string;
    switch(key){
      case 'worldChampions':
      params = 'f1/driverstandings/1.json?limit=11&offset=55';
      break;
      case 'year':
      params = `f1/${year}/results/1.json`
      break;
    }

    return this.http
      .get<any[]>(`${this.baseApi}/${params}`);
  }
}
