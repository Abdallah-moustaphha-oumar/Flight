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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { BookmarkslistComponent } from './pages/bookmarks/bookmarkslist/bookmarkslist.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SynthesisComponent } from './synthesis/synthesis.component';
import { SynthesisCriteriaComponent } from './synthesis/synthesis-criteria/synthesis-criteria.component';
import { SynthesisFlightsComponent } from './synthesis/synthesis-flights/synthesis-flights.component';
import { SynthesisCompanyComponent } from './synthesis/synthesis-company/synthesis-company.component';








@NgModule({
  declarations: [
    FlightsComponent,
    FlightsListComponent,
    FlightPageComponent,
    BookmarksComponent,
    BookmarkslistComponent,
    SynthesisComponent,
    SynthesisCriteriaComponent,
    SynthesisFlightsComponent,
    SynthesisCompanyComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatTableModule,
    MatCheckboxModule,
    MatSnackBarModule,
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
