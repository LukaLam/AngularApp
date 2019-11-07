import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../counter.service';
import { Observable } from 'rxjs';
import { Counter } from '../counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  title = "compteur 1"
  @Input() position :number;

  value: Counter;

  constructor( public counterService: CounterService ) { 
    
  }

  ngOnInit() {
    this.counterService.getCounterValue(this.position).subscribe(counter => this.value= counter);
  }

  increment() {
   // this.counterService.increment(this.position); 
   if(this.position+46 === 48){ // obliger de faire ce truc moche, car il n'y a pas de compteur 3, juste 43/44/45
    this.counterService.increment().subscribe(counter => this.value = counter);
  }
  
  }

}
