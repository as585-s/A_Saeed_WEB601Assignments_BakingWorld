import { ContentService } from './../services/content.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  id?: number;
  contentItem?: Content;

  constructor(private route: ActivatedRoute, private contentService: ContentService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +(params.get('id') ?? "0"); //uses the + unary operator
      this.contentService.getSingleContent(this.id).subscribe(
        (c) => {
          this.contentItem = c;
        });
    });
  }

}
