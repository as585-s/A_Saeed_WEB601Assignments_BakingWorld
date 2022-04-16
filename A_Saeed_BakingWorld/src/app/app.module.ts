import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content/content-card/content-card.component';
import { ContentListComponent } from './content/content-list/content-list.component';
import { ContentFilterPipe } from './content-filter.pipe';
import { TypewithvalueFilterPipe } from './typewithvalue-filter.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { MessageComponent } from './message/message.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { DialogOverviewExampleDialog, ModifyContentComponentComponent } from './content/modify-content-component/modify-content-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ContentDetailComponent } from './content/content-detail/content-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentFilterPipe,
    TypewithvalueFilterPipe,
    HoverAffectDirective,
    MessageComponent,
    ModifyContentComponentComponent,
    DialogOverviewExampleDialog,
    ContentDetailComponent,
    PageNotFoundComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, 
    {
      dataEncapsulation: false,
    //  delay: 3000,
    }),
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
