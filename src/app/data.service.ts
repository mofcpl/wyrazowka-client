import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})
export class DataService {

   lettersChanged = new Subject<number>();
   findTriggered = new Subject<boolean>();

   private lettersCount: number;
   private words: string[];

   constructor(private http: HttpClient) {
      this.lettersCount = 5;
   }

   triggerFind() {
      this.findTriggered.next(true);
   }

   getLettersCount() {
      return this.lettersCount;
   }

   addLetter() {
      if(this.lettersCount < 21) {
         this.lettersCount++;
         this.lettersChanged.next(this.lettersCount);
      }
   }

   deleteLetter() {
      if(this.lettersCount > 2) {
         this.lettersCount--;
         this.lettersChanged.next(this.lettersCount);
      }
   }

   fetchWords(letters: string[]): Observable<string[]> {
      const queryParams = {letters: letters}
      return this.http.get<string[]>("station/sensors/", { params: queryParams});
   }

   check(letters: string[]) {

      for(let i = 0; i < letters.length; i++) {
         if(!letters[i]) letters[i] = ''
      }

      this.fetchWords(letters).subscribe(() => {
         console.log('HTTP')
      })
   }
}
