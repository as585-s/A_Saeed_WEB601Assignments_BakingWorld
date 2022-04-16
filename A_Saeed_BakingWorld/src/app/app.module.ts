import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    // ContentCardComponent,
    // ContentListComponent,
    MessageComponent,
   // ModifyContentComponentComponent,
   // DialogOverviewExampleDialog,
   // ContentDetailComponent,
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
