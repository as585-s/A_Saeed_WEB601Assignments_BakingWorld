import { Content } from './../helper-files/content-interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  bread: Content;
  pizza: Content;
  chicken: Content;

  constructor() {
    this.bread = {
      id: 0,
    title: "Homemade Bread",
    description: "Home baked bread",
    creator: "June Xie",
    imgURL: "https://www.delish.com/cooking/recipe-ideas/a25800429/how-to-make-homemade-bread-recipe/",
    type: "Whole Wheat",
    tags: ['Delish Bread'] 
    }

    this.pizza = {
      id: 1,
    title: "Homemade Pizza",
    description: "Best ever home made pizza ",
    creator: "Makinze Gore",
    imgURL: "https://www.delish.com/cooking/recipe-ideas/a24893663/homemade-pizza-recipe/",
    type: "All purpose flour",
    tags: ['Delish Pizza'] 
    }

    this.bread = {
      id: 0,
    title: "Homemade Bread",
    description: "Home baked bread",
    creator: "June Xie",
    imgURL: "https://www.delish.com/cooking/recipe-ideas/a25800429/how-to-make-homemade-bread-recipe/",
    type: "Whole Wheat",
    tags: ['Delish Bread'] 
    }

    this.chicken = {
      id: 2,
    title: "Baked Chicken",
    description: "Chicken and Rice Casserole",
    creator: "Sienna Livermore",
    imgURL: "https://www.delish.com/cooking/g1683/baked-chicken/",
    type: "Baked chicken",
    tags: ['Delish Baked Chicken'] 
    }
   }

  ngOnInit(): void {
  }

}
