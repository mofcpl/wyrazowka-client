import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

   constructor(private dataService: DataService) { }

   increse() {
      this.dataService.addLetter();
   }
   decrese() {
      this.dataService.deleteLetter();
   }

}
