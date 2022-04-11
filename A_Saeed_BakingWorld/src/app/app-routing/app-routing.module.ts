import { ContentDetailComponent } from './../content-detail/content-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ContentListComponent } from '../content-list/content-list.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';




const routes: Routes = [
  { path: "content/:id",
  component: ContentDetailComponent
  },
  {
    path: "content",
    component: ContentListComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
 ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
