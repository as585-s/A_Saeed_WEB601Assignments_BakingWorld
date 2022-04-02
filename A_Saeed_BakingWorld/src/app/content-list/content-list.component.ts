
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from './../services/content.service';



@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  searchMessage: string = "";
  searchFlag: boolean = false;
 // contentItem: Content[] = [];
  contentList: Content[];
  
  constructor(private contentService: ContentService) {
    this.contentList = [];
   }

  ngOnInit(): void {
    this.contentService.getContentList().subscribe(list =>{
      this.contentList = list;
    })

  }



  checkForTitle(searchValue: string): void{
    let searchList = this.contentList.filter(c=> c.title == searchValue);
    if (searchList.length > 0){
      this.searchMessage = "Found the food item!";
      this.searchFlag = true;
    } else {
      this.searchMessage = "No food item with that title";
      this.searchFlag = false;
    }
  }
  addContentToList(newContentItem: Content): void{
    //this.contentList.push(newContentItem);
    // this.contentList = [...this.contentList]

    this.contentService.getContentList().subscribe(list => {
      this.contentList = list;
    });
  }
}
