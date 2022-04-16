import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';




const routes: Routes = [
  { path: "",
    redirectTo: "/list",
    pathMatch: "full"
  },
  {
    path: "list",
    loadChildren: () => import('../content/content.module').then(m => m.ContentModule)
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
 ];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
