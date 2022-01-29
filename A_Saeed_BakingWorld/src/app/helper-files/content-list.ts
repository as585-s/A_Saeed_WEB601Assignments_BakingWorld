class ContentList{
 private _items: Content[];
    constructor(item: Content){
        this._items = [];
    }

 get items(): Content[]{
     return this._items;
 }

 addItem(){
     
 }

}