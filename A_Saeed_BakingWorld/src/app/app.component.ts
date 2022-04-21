import { LogUpdateService } from './services/log-update.service';

import { ApplicationRef, Component, OnInit } from '@angular/core';
import {Content} from './helper-files/content-interface';
import { ContentService } from './services/content.service';
import { SwUpdate } from '@angular/service-worker'
import { concat, first, interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = `ASaeed Baking World`;
  someItem?: Content;

  constructor(private mService: ContentService, 
    private logUpdateService: LogUpdateService,
    private appRef: ApplicationRef,
    private updates: SwUpdate){ }

  ngOnInit(): void {
    if (navigator.serviceWorker) {
      this.logUpdateService.init();

      const appIsStable$ = this.appRef.isStable.pipe(
        first(isThisStableYet => isThisStableYet === true));

        const everyHalfHour$ = interval((1 * 60 * 60 * 1000)/2);
        const everyHalfHourOnceAppIsSatble$ = 
        concat(appIsStable$, everyHalfHour$);
        everyHalfHourOnceAppIsSatble$.subscribe(
          () => this.updates.checkForUpdate());
    }
    else {

    }
   this.mService.getSingleContent(1).subscribe(contentItem => this.someItem = contentItem);
}

displayFoodItem(id: string): void{
  this.mService.getSingleContent(parseInt(id)).subscribe(contentItem => this.someItem = contentItem)
}
displayContentItem(id: string): void {
  this.mService.getSingleContent(parseInt(id)).subscribe(contentItem => this.someItem = contentItem);
}

}
