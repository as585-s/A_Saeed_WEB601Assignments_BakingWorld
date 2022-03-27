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

    //function that will retrieve the content array from the contentDb file
    //and return it using the observalbe pattern.
    getContentObs() : Observable<Content[]> {
      this.messageService.add('Content Array Loaded!');
      return of(contentList);
    }
  */
 getContentList(): Observable<Content[]>{
   this.messageService.add("Content array loaded");
   return of(contentList);
 }

 getSingleItem(id: number): Observable<Content>{
 /*   if (id <contentList.length && id >= 0){
     return of(contentList[id]);
   } else{
     this.messageService.add("id is invalid");
   }
*/
  let filteredContentList: Content[] = contentList.filter(contentItem => contentItem.id === id);
  //if the id is out of range, below 0 or above the length, the filter will return an empty array
  if (filteredContentList.length){
    this.messageService.add(`Content Item at id: ${id}`);
    return of (filteredContentList[0]);
  } else {
    this.messageService.add("Invalid id number entered");
    return of({
      id: -1,
      title: "Invalid id entered",
      description: "n/a",
      creator: "nobody"
    });
  }
 }
}

