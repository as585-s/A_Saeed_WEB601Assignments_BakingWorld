import { MaterialModule } from './../material/material.module';
import { ContentRoutingModule } from '../content/content-routing.module';
import { FormsModule } from '@angular/forms';
import { HoverAffectDirective } from './../hover-affect.directive';
import { TypewithvalueFilterPipe } from './../typewithvalue-filter.pipe';
import { ModifyContentComponentComponent, DialogOverviewExampleDialog } from '../content/modify-content-component/modify-content-component.component';
import { ContentDetailComponent } from '../content/content-detail/content-detail.component';
import { ContentListComponent } from '../content/content-list/content-list.component';
import { ContentCardComponent } from '../content/content-card/content-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ContentCardComponent,
    ContentListComponent,
    ContentDetailComponent,
    ModifyContentComponentComponent,
    TypewithvalueFilterPipe,
    HoverAffectDirective,
    DialogOverviewExampleDialog
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContentRoutingModule,
    MaterialModule
  ]
})
export class ContentModule { }
