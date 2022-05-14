import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from '../flights/pages/flights/flights.component';
import { FlightsListComponent } from './components/flights-list/flights-list.component';
import { MatTableModule  } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatSortModule} from '@angular/material/sort';
import { FlightPageComponent } from './pages/flights/flight-page/flight-page.component'
import { SharedModule } from '../shared/shared.module';
import { PortalModule } from '../portal/portal.module';






@NgModule({
  declarations: [
    FlightsComponent,
    FlightsListComponent,
    FlightPageComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    SharedModule,
    PortalModule,
  ],
  exports: [
    FlightsListComponent
  ],
  providers:[]
})
export class FlightsModule { }
