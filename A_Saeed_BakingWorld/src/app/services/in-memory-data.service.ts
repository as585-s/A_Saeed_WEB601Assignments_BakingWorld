import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from '../helper-files/content-interface';
import { contentList} from '../helper-files/contentDb';


@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    //setting it to the value of our array of content
    const content : Content[] = contentList;
    return {content};
  }

  //override the getID method that comes with the implemented service, to make use later

  genId(content: Content[]): number {
    return content.length > 0 ?
    Math.max(...content.map(c => c.id ?? 0)) + 1 : 2000;
  }

  
}
