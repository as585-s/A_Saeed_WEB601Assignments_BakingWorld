import { ContentService } from './../services/content.service';
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';



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
}
