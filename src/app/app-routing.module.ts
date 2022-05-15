import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsListComponent } from './flights/components/flights-list/flights-list.component';
import { BookmarksComponent } from './flights/pages/bookmarks/bookmarks.component';
import { BookmarkslistComponent } from './flights/pages/bookmarks/bookmarkslist/bookmarkslist.component';
import { FlightPageComponent } from './flights/pages/flights/flight-page/flight-page.component';
import { SearchFormComponent } from './shared/components/search-form/search-form.component';

const routes: Routes = [
  {path:'search',component:SearchFormComponent},
  {path:'list', component:FlightsListComponent},
  {path:'flights', component:FlightPageComponent},
  {path:'bookmarks', component:BookmarksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
