import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightsListComponent } from './components/flights-list/flights-list.component';
import { MatTableModule  } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatSortModule} from '@angular/material/sort'






@NgModule({
  declarations: [
    FlightsComponent,
    FlightsListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    FlightsListComponent
  ],
  providers:[]
})
export class FlightsModule { }
