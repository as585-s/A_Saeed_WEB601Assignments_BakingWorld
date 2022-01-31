import { Content } from "./content-interface";

class ContentList{
    static itemCount = 0;
    private _items: Content[];

    constructor(item: Content){
        this._items = []; //initialize array
        this._items[0] = item;
        this.increaseCount();
    }


 get items(): Content[]{
    return this._items;
 }


 increaseCount(){
     return ++ContentList.itemCount;
 }

}

