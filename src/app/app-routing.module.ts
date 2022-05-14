import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsListComponent } from './flights/components/flights-list/flights-list.component';
import { SearchFormComponent } from './shared/components/search-form/search-form.component';

const routes: Routes = [
  {path:'search',component:SearchFormComponent},
  {path:'list', component:FlightsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
