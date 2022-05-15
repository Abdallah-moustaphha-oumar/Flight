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
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MatButtonModule } from '@angular/material/button';
import { MatTableExporterModule } from 'mat-table-exporter';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';






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
    MatIconModule,
    TranslateModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTableExporterModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    FlightsListComponent
  ],
  providers:[]
})
export class FlightsModule { }
