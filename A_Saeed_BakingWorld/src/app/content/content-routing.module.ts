import { ContentDetailComponent } from './content-detail/content-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContentListComponent } from './content-list/content-list.component';


const routes: Routes = [
  {
    path: "",
    component: ContentListComponent
  },
  {
    path: ":id",
    component: ContentDetailComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
