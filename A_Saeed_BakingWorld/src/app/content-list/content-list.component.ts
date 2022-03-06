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
  contentList: Content[];
  
  constructor() {
    this.contentList = [{
      id: 0,
      title: "Homemade Bread",
      description: "Home baked bread",
      creator: "June Xie",
      imgURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-bread-horizontal-1547759080.jpg?crop=0.671xw:1.00xh;0.0801xw,0&resize=980:*",
      type: "Bread",
      tags: ['Delish Bread', "whole wheat bread"]},
    {
      id: 1,
      title: "Homemade Pizza",
      description: "Best ever home made pizza ",
      creator: "Makinze Gore",
      imgURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:1.00xh;0,0&resize=980:*",
      type: "",
      tags: ['Delish Pizza', "home made pizza"]},
    {
      id: 2,
      title: "Simple Whole Wheat Bread",
      description: "Home baked bread",
      creator: "Jenny Jones",
      imgURL: "https://www.jennycancook.com/wp-content/uploads/2016/04/Simple_Whole_Wheat_Bread.jpg",
      type: "Bread",
      tags: ['Delish Bread', "home baked bread"]},
    {
      id: 3,
      title: "Baked Chicken",
      description: "Chicken and Rice Casserole",
      creator: "Sienna Livermore",
      imgURL: "",
      type: "Meat",
      tags: ['Delish Chicken', "Baked chicken"]},
    {
      id: 4,
      title: "Baked Potatoes",
      description: "Perfect baked potatoes",
      creator: "Jeanine and Jack",
      imgURL: "https://cdn.loveandlemons.com/wp-content/uploads/2020/01/baked-potato-580x580.jpg",
      type: "Vegetable",
      tags: ['Love and Lemons', "Baked potatoes"]
    },
    {
      id: 5,
      title: "Roast Beef",
      description: "Roast beef curry",
      creator: "Cassie Marshall",
      imgURL: "https://thekitchencommunity.org/wp-content/uploads/2021/07/Roast-Beef-Curry.jpg",
      type: "Meat",
      tags: ['The Kitchen Community', "Roast Beef"]
    },
    {
      id: 6,
      title: "Oven Baked Salmon",
      description: "Baked Salmon",
      creator: "Kathleen Daelemans",
      imgURL: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/26/1/CN1B01_oven-baked-salmon_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382545141944.jpeg",
      type: "Meat",
      tags: ['Food Network', "Baked Salmon"]
    }];
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
  donothing(){
    
  }

  addItemToList(newItemFromChild: Content){
    this.contentList.push(newItemFromChild);
    this.contentList = [...this.contentList];
  }

}
