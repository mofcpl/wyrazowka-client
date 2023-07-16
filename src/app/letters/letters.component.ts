import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
   selector: 'app-letters',
   templateUrl: './letters.component.html',
   styleUrls: ['./letters.component.scss']
})
export class LettersComponent {

   letters: string[] = [];

   constructor(private dataService: DataService) { }

   ngOnInit() {
      this.letters.length = this.dataService.getLettersCount();
      
      this.dataService.lettersChanged.subscribe((lettersCount: number) => {
         this.letters.length = lettersCount;
      });

      this.dataService.findTriggered.subscribe((confirm: boolean) => {
         if(confirm) {
            this.dataService.check(this.letters.slice());
         }
      })
   }

   //Tracking needs to be changed to tracking by index instead of reference becouse of using primitive values(letters)
   trackById(index: number, obj: any): any {
      return index;
   }

}
