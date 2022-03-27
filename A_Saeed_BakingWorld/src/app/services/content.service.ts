import { Injectable } from '@angular/core';
import {contentList} from '../helper-files/contentDb';
import {Content} from '../helper-files/content-interface';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  }
  constructor(private http: HttpClient) {}

 getContent(): Observable<Content[]>{ //get the content synchronously - not real world
   console.log("Getting the list")
   return this.http.get<Content[]>("api/food");
 }

 addContent(newContentItem: Content): Observable<Content>{
   console.log("added the new content: ", newContentItem);
   return this.http.post<Content>("api/content", newContentItem, this.httpOptions);
 }

 updateContent(contentItem: Content): Observable<any>{
   return this.http.put("api/content", contentItem, this.httpOptions);
 }


 }


