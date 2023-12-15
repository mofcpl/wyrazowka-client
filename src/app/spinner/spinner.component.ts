import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

   isLoading: boolean = true;

   constructor(private dataService: DataService) {}

   ngOnInit() {
      this.dataService.getLoaded().subscribe((isLoading)=> {
         this.isLoading = isLoading;
      })
   }

}
