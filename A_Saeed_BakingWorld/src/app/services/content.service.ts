import { Injectable } from '@angular/core';

import {Content} from '../helper-files/content-interface';
import { of, Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  }
  constructor(private messageService: MessageService, private http: HttpClient) {}
/*
 getContent(): Observable<Content[]>{ //get the content synchronously - not real world
   return this.http.get<Content[]>("api/content");
 }
*/
 addContent(newContent: Content): Observable<Content>{
   return this.http.post<Content>("api/content", newContent, this.httpOptions);
 }

 updateContent(contentItem: Content): Observable<any>{
   return this.http.put("api/content", contentItem, this.httpOptions);
 }

 getContentList(): Observable<Content[]>{
   this.messageService.add("Content array loaded");
   return this.http.get<Content[]>("api/content")
 }

 getSingleItem(id:number): Observable<Content>{
   return this.http.get<Content>("api/content/" +id);
 }
}