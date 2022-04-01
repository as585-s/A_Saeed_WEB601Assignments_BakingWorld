import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../services/content.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
 
  contentListForCheckingValidId: Content[] = [];
  newContent: Content = {
    title: "", description: '', creator: '', type: undefined
  };

  tempId: string = "";
  tempTags: string = '';
  errorMessage: string = '';

  constructor(private contentService:ContentService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.contentService.getContentList().subscribe(list => {
      this.contentListForCheckingValidId = list;
    });
  }

  addContentFromChild(): void {
    if (this.tempId === "") {
      this.newContent.tags = this.tempTags.split(';');
      this.contentService.addContent(this.newContent).subscribe((newContentFromServer) => {
        this.messageService.add("Movie successfully adde to the server!");
        this.newContentEvent.emit(newContentFromServer);
      });

      this.newContent = {
          title: "", description: '', creator:'', type: undefined
        };
      
        this.tempId = "";
        this.tempTags = '';
        //this.errorMessage= '';
      }
      else {
      //  this.newContent.id = parseInt(this.tempId);
        if(this.newContent.id !== undefined
          && this.contentListForCheckingValidId.some(content => content.id === this.newContent.id)){
            this.newContent.tags = this.tempTags.split(';');
            this.contentService.updateContent(this.newContent).subscribe(() => {
              this.messageService.add("Content successfully updated on the server!");
              this.newContentEvent.emit(this.newContent);
            });

            this.newContent = {
              title: "", description: '', creator:'', type: undefined
            };
            this.tempId = "";
            this.tempTags = "";
            //this.errorMessage = "";
          }
      }

    }

  }

