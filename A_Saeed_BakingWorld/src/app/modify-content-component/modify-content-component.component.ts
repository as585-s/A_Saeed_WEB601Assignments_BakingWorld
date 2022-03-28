import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newContent?: Content;

  constructor() { }

  ngOnInit(): void {
  }

  addContent(title: string, description: string, creator: string, imgURL: string, type: string, tags: string): void{
    this.newContent = {
      title: title,
      description: description,
      creator: creator,
      imgURL: imgURL,
      type: type,
      tags: tags.split(",")
    }
    this.newContentEvent.emit(this.newContent);
  }
  updateContent(id: string, title: string, desciption: string, creator: string, imgURL: string, type: string, tags: string): void{
    this.newContent = {
      id: parseInt(id),
      title: title,
      description: desciption,
      creator: creator,
      imgURL: imgURL,
      type: type,
      tags: tags.split(",")
    }
    this.updateContentEvent.emit(this.newContent);
  }

}
