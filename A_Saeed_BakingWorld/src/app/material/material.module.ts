import { NgModule, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule} from '@angular/material/dialog';


const MaterialComponents = [
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatDialogModule,
  MatChipsModule,
  MatBadgeModule
 ]

@NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents]
})
export class MaterialModule { }
