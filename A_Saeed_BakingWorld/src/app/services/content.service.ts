import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import {Content} from '../helper-files/content-interface';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };
  constructor(private messageService: MessageService, private http: HttpClient) {}
/*
 getContent(): Observable<Content[]>{ //get the content synchronously - not real world
   return this.http.get<Content[]>("api/content");
 }
*/
 addContent(newContent: Content): Observable<Content>{
   this.messageService.add("Going to add food item to the server!");
   return this.http.post<Content>("api/content", newContent, this.httpOptions);
 }

 updateContent(oldContent: Content): Observable<any>{
   return this.http.put("api/content", oldContent, this.httpOptions);
 }

 getContentList(): Observable<Content[]>{
//   this.messageService.add("Content array loaded");
   return this.http.get<Content[]>("api/content")
 }

 getSingleContent(id: number): Observable<Content>{
   this.messageService.add(`Content Item at id: ${id}`);
   return this.http.get<Content>("api/content/" + id);
 }
 
}