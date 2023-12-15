import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DictionaryParams } from './params.model';
import { environment } from './../environments/environment';

const DEFAULT_LETTERS_COUNT = 5;

@Injectable({
   providedIn: 'root'
})

export class DataService {

   lettersChanged = new Subject<number>();
   findTriggered = new Subject<boolean>();

   private dictionaryParams: DictionaryParams;
   private lettersCount: number;

   private matchingWords = new Subject<string[]>;
   private loaded = new Subject<boolean>;
   private appReady = new Subject<boolean>;

   constructor(private http: HttpClient) {
      this.lettersCount = DEFAULT_LETTERS_COUNT;
      this.http.get<DictionaryParams>(environment.api + "/length/").subscribe((params) => {
         this.dictionaryParams = params;
         this.appReady.next(true);
         this.loaded.next(false);
      })
   }

   getAppReady(): Observable<boolean> {
      return this.appReady.asObservable();
   }

   getMatchingWords(): Observable<string[]> {
      return this.matchingWords.asObservable();
   }

   getLoaded(): Observable<boolean> {
      return this.loaded.asObservable();
   }

   triggerFind() {
      this.findTriggered.next(true);
   }

   getLettersCount() {
      return this.lettersCount;
   }

   addLetter() {
      if(this.lettersCount < this.dictionaryParams.maxLength) {
         this.lettersCount++;
         this.lettersChanged.next(this.lettersCount);
      }
   }

   deleteLetter() {
      if(this.lettersCount > this.dictionaryParams.minLength) {
         this.lettersCount--;
         this.lettersChanged.next(this.lettersCount);
      }
   }

   fetchWords(letters: string[]): Observable<string[]> {
      const queryParams = {letters: letters}
      return this.http.get<string[]>(environment.api + "/words/", { params: queryParams});
   }

   check(letters: string[]) {
      this.loaded.next(true);

      for(let i = 0; i < letters.length; i++) {
         if(!letters[i]) letters[i] = ''
      }

      this.fetchWords(letters).subscribe((data) => {
         this.matchingWords.next(data)
         this.loaded.next(false);
      })
   }
}
