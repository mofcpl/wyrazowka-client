import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
   selector: 'app-words',
   templateUrl: './words.component.html',
   styleUrls: ['./words.component.scss']
})
export class WordsComponent {
   @ViewChild('down') private down: ElementRef;

   words: string[];

   constructor(private dataService: DataService) {}

   ngOnInit() {
      this.dataService.getMatchingWords().subscribe((words)=> {
         this.words = words;
      })
      this.dataService.scrollDown.subscribe( () => {
         this.down.nativeElement.scrollIntoView({ behavior: 'smooth' });
      })
   }
}
