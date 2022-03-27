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
  contentList: Content[];

  constructor(private contentService: ContentService){
    this.contentList = [];

  }

  ngOnInit(): void {
    this.getContentFromServer();

}

getContentFromServer(): void{
  this.contentService.getContent().subscribe(contentArray => this.contentList = contentArray);
}

updateContentInList(contentItem: Content): void{
  this.contentService.updateContent(contentItem).subscribe(() => {
    this.getContentFromServer();
  });
}

addContentToList(newContentItem: Content): void {
  this.contentService.addContent(newContentItem).subscribe(newContentFromServer => {
  //  console.log("new content from server: ", newContentFromServer);

    this.contentList.push(newContentFromServer);
    this.contentList = [...this.contentList];
  });
}
}