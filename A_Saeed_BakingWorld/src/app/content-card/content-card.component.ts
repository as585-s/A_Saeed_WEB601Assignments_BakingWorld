import { ContentList } from './../helper-files/content-list';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  myList: ContentList;
  

  constructor() {
    this.myList = new ContentList();
     
    this.myList.addItem({
      id: 0,
    title: "Homemade Bread",
    description: "Home baked bread",
    creator: "June Xie",
    imgURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-bread-horizontal-1547759080.jpg?crop=0.671xw:1.00xh;0.0801xw,0&resize=980:*",
    type: "Whole Wheat",
    tags: ['Delish Bread'] 
    });

    this.myList.addItem({
      id: 1,
    title: "Homemade Pizza",
    description: "Best ever home made pizza ",
    creator: "Makinze Gore",
    imgURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:1.00xh;0,0&resize=980:*",
    type: "All purpose flour",
    tags: ['Delish Pizza'] 
    });

    this.myList.addItem({
      id: 2,
    title: "Simple Whole Wheat Bread",
    description: "Home baked bread",
    creator: "Jenny Jones",
    imgURL: "https://www.jennycancook.com/wp-content/uploads/2016/04/Simple_Whole_Wheat_Bread.jpg",
    type: "Whole Wheat",
    tags: ['Delish Bread'] 
    })

    this.myList.addItem({
      id: 3,
    title: "Baked Chicken",
    description: "Chicken and Rice Casserole",
    creator: "Sienna Livermore",
    imgURL: "https://life-in-the-lofthouse.com/wp-content/uploads/2015/11/Chicken-Noodle-Casserole_new.jpg",
    type: "Baked chicken",
    tags: ['Delish Baked Chicken'] 
    });
   }

  ngOnInit(): void {
  }

}
