import { ContentService } from './../services/content.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  id?: number;
  contentItem?: Content;

  constructor (private messageService: MessageService, private mService: ContentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +(params.get('id') ?? "0"); //uses the + unary operator
      this.mService.getSingleContent(this.id).subscribe(
        (contentItem) => {
          this.contentItem = contentItem;
          this.messageService.add(`Content at id ${contentItem.id} was retrieved, with a title of ${contentItem.title}`)
        });
    });
  }

}
