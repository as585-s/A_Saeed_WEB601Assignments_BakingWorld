import { MessageService } from './../services/message.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(public MessageService: MessageService) { }

  ngOnInit(): void {
  }

}
