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

 /* increment(position: number): number {
    this.initialValue[position]++;
    return this.initialValue[position];
  } */

  increment(): Observable<Counter>{
    //this.httpClient.patch<Counter>("https://lp4asgadot.herokuapp.com/counters/2.json",{"value" : 1});
    this.httpClient.patch("https://lp4asgadot.herokuapp.com/counters/43.json",{"value" : 1}).subscribe();
    return this.httpClient.get<Counter>("https://lp4asgadot.herokuapp.com/counters/43.json");
  }

  getCounterValue(id: number): Observable<Counter> {
    return this.httpClient.get<Counter>("https://lp4asgadot.herokuapp.com/counters/"+(id+46)+".json")  // comme dans l'autre fichier, il n'y a pas de compteur numéro 3, uniquement 43/44 ou 45, donc j'incrémente le 43eme
  }
}
