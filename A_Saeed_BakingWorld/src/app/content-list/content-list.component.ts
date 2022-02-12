import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
//  @Input() content?: Content;
  contentList: Content[];
  
  constructor() {
    this.contentList = [{
      id: 0,
      title: "Homemade Bread",
      description: "Home baked bread",
      creator: "June Xie",
      imgURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-bread-horizontal-1547759080.jpg?crop=0.671xw:1.00xh;0.0801xw,0&resize=980:*",
      type: "Whole Wheat",
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
      type: "Wheat",
      tags: ['Delish Bread', "home baked bread"]},
    {
      id: 3,
      title: "Baked Chicken",
      description: "Chicken and Rice Casserole",
      creator: "Sienna Livermore",
      imgURL: "https://life-in-the-lofthouse.com/wp-content/uploads/2015/11/Chicken-Noodle-Casserole_new.jpg",
      type: "",
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
      type: "Beef",
      tags: ['The Kitchen Community', "Roast Beef"]
    },
    {
      id: 6,
      title: "Oven Baked Salmon",
      description: "Baked Salmon",
      creator: "Kathleen Daelemans",
      imgURL: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/26/1/CN1B01_oven-baked-salmon_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382545141944.jpeg",
      type: "Fish",
      tags: ['Food Network', "Baked Salmon"]
    }
  ]
   }

  ngOnInit(): void {
  }

}
