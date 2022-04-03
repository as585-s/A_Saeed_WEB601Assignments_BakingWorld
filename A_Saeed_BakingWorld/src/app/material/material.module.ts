import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';



const MaterialComponents = [
  MatButtonModule
]

@NgModule({
    imports: [MaterialComponents ],
    exports: [MaterialComponents]
})
export class MaterialModule { }
