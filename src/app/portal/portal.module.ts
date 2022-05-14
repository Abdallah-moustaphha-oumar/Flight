import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { LeftSideComponent } from './left-side/left-side.component';
import { BotSideComponent } from './bot-side/bot-side.component';
import { MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    LeftSideComponent,
    BotSideComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports:[
    LeftSideComponent,
    BotSideComponent
  ]
})
export class PortalModule { }
