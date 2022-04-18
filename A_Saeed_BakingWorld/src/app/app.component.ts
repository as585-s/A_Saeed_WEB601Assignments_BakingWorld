import { LogUpdateService } from './services/log-update.service';

import { Component, OnInit } from '@angular/core';
import {Content} from './helper-files/content-interface';
import { ContentService } from './services/content.service';
import { SwUpdate } from '@angular/service-worker'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  someItem?: Content;
  appRef: any;
  updates: any;


  constructor(private mService: ContentService, 
    private logService: LogUpdateService,
    private swUpdate: SwUpdate){
      this.title = 'Made a change for service worker to notice';
      }

  ngOnInit(): void {
   this.mService.getSingleContent(1).subscribe(contentItem => this.someItem = contentItem);

   this.logService.init();
/*
   const appIsStable$ = this.appRef.isStable.pipe (
     first ((isStable: boolean) => isStable === true));
   const everyHour$ = interval (1 * 60 * 60 * 1000);
   const everyHourOnceAppIsStable$ = 
    concat(appIsStable$, everyHour$);

  everyHourOnceAppIsStable$.subscribe(
    () => this.updates.checkForUpdate());
*/
}

displayFoodItem(id: string): void{
  this.mService.getSingleContent(parseInt(id)).subscribe(contentItem => this.someItem = contentItem)
}

}