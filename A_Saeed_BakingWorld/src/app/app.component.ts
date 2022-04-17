import { LogUpdateService } from './services/log-update.service';

import { Component, OnInit } from '@angular/core';
import {Content} from './helper-files/content-interface';
import { ContentService } from './services/content.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  someItem?: Content;


  constructor(private mService: ContentService, 
    private logService: LogUpdateService){
      this.title = 'Made a change for service worker to notice';
      }

  ngOnInit(): void {
   this.mService.getSingleContent(1).subscribe(contentItem => this.someItem = contentItem);

   this.logService.init();
}

displayFoodItem(id: string): void{
  this.mService.getSingleContent(parseInt(id)).subscribe(contentItem => this.someItem = contentItem)
}

}