import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
   selector: 'app-words',
   templateUrl: './words.component.html',
   styleUrls: ['./words.component.scss']
})
export class WordsComponent {

   words: string[];

   constructor(private dataService: DataService) {}

   ngOnInit() {
      this.dataService.getMatchingWords().subscribe((words)=> {
         this.words = words;
      })
   }
}
