import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { LeftSideComponent } from './left-side/left-side.component';



@NgModule({
  declarations: [
    LeftSideComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    LeftSideComponent
  ]
})
export class PortalModule { }
