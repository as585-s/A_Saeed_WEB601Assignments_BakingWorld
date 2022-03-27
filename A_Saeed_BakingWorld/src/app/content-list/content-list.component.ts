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
/*
  ngOnInit(): void {
     this.contentService.getContentObs().subscribe(contentArray =>{

    contentArray.forEach(function(item, i){
      if(contentArray[i].id === 6){
        contentArray.splice(i, 1);
        contentArray.unshift(item);
     //   console.log("item", item, "i=", i);
      }
    
    })
      return this.contentList = contentArray;
    //  console.log('firstObservable', contentArray[0]);

    })
  }
*/
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
