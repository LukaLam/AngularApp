import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {Counter} from './counter';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  public initialValue = [12,5,7];

  constructor(private httpClient:HttpClient) { }

  
  resetCounter(){
    this.initialValue = [0,0,0];
  }

  increment(position: number): number {
    this.initialValue[position]++;
    return this.initialValue[position];
  }
  getCounterValue(id: number): Observable<Counter> {
    return this.httpClient.get<Counter>("https://lp4asgadot.herokuapp.com/counters/"+id+".json")
  }
}
