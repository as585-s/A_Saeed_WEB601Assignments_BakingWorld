
import { Component, OnInit } from '@angular/core';
import {Content} from './helper-files/content-interface';
import { ContentService } from './services/content.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'A_Saeed_BakingWorld';
  someItem?: Content;

  constructor(private mService: ContentService){  }

  ngOnInit(): void {
   this.mService.getSingleContent(1).subscribe(contentItem => this.someItem = contentItem);

}

displayFoodItem(id: string): void{
  this.mService.getSingleContent(parseInt(id)).subscribe(contentItem => this.someItem = contentItem)
}

}