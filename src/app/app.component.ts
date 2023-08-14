import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   isAppReady: boolean = false;

   constructor(private dataService: DataService) {}

   ngOnInit() {
      this.dataService.getAppReady().subscribe((isReady)=> {
         this.isAppReady = isReady;
      })
   }
}
