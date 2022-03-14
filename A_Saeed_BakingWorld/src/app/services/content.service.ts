import { Injectable } from '@angular/core';
import {contentList} from '../helper-files/contentDb';
import {Content} from '../helper-files/content-interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() {}
  /*
    getContent(): Content[]{
      return contentList;
    }
*/
    //function that will retrieve the content array from the contentDb file
    //and return it using the observalbe pattern.
    getContentObs() : Observable<Content[]> {
      return of(contentList);
    }
  
}
/*ngOnInit
function getContent() {
  throw new Error('Function not implemented.');
}
*/
