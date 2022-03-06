import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
 @Output() newContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
 newItem?: Content;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(Id: string, title: string, description: string, creator: string, imgURL: string, type: string, tags: string): void{
    this.newItem = {
      id: parseInt(Id),
      title: title,
      description: description,
      creator: creator,
      imgURL: imgURL,
      type: type,
      tags: tags.split(",")
    
    };
    this.newContentEvent.emit(this.newItem);
  }

}
