import { Injectable } from '@angular/core';
import {contentList} from '../helper-files/contentDb';
import {Content} from '../helper-files/content-interface';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService) {}
  /*
    getContent(): Content[]{
      return contentList;
    }
*/
    //function that will retrieve the content array from the contentDb file
    //and return it using the observalbe pattern.
    getContentObs() : Observable<Content[]> {
      this.messageService.add('Content Array Loaded!');
      return of(contentList);
    }
  
}

