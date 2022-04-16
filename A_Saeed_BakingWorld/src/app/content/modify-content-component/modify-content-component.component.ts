import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Content } from '../../helper-files/content-interface';
import { ContentService } from '../../services/content.service';
import { MessageService } from '../../services/message.service';

export interface DialogData {
  newContent: Content;
  tempTags: string;
}

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  contentListForCheckingValidId: Content[] = [];
  @Input() newContent: Content = {
    title: "", description: '', creator: '', type: undefined
  };

  tempId: string = "";
  tempTags: string = '';
  errorMessage: string = '';

  constructor(public dialog: MatDialog, private contentService:ContentService, private messageService: MessageService) { }

  ngOnInit(): void {
    //commented out as it is only needed when we modify something.
   // this.contentService.getContentList().subscribe(list => {
    //  this.contentListForCheckingValidId = list;
  //  });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '300px',
      data: this.newContent,
    });

    dialogRef.afterClosed().subscribe((result: DialogData) => {
      console.log('The dialog was  closed', result);
      this.newContent = result.newContent;
      this.tempTags = result.tempTags;
      this.addContentFromChild();
    });
  }

  addContentFromChild(): void {
    if (this.tempId === "") {
      this.newContent.tags = this.tempTags.split(';');
      this.contentService.addContent(this.newContent).subscribe((newContentFromServer) => {
        this.messageService.add("Food Item successfully added to the server!");
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
        this.newContent.id = parseInt(this.tempId)
        if(this.newContent.id !== undefined){
          //on;y get content list from the server if we need to validate against it
          this.contentService.getContentList().subscribe(list => {
            this.contentListForCheckingValidId = list;

            if (this.contentListForCheckingValidId.some(contentItem => contentItem.id === this.newContent.id)){
              this.newContent.tags = this.tempTags.split(';');
              this.contentService.updateContent(this.newContent).subscribe(() => {
                this.messageService.add("Food Item successfully updated on the server!");
                this.newContentEvent.emit(this.newContent);
              });
              
                
          this.newContent = {
              title: "", description: '', creator:'', type: undefined
            };
            this.tempId = "";
            this.tempTags = "";
            //this.errorMessage = "";
          }
       });
      }

    }

  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  tempId: string = "";
  tempTags: string = '';
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Content,
  ) {
    this.tempId = data.id + "";
    if (data.tags) {
      this.tempTags = data.tags.join(";");
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendDataUp(): void {
    this.data.tags = this.tempTags.split(';');
    this.dialogRef.close(this.data);
  }
}

