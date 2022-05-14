import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from '../components/search-form/search-form.component';



@NgModule({
  declarations: [
    SearchFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchFormComponent
  ]
})
export class SharedModule { }
