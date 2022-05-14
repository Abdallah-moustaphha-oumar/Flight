import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchFlightForm: FormGroup;

  constructor(private readonly sharedservice:SharedService) { }

  ngOnInit(): void {
    this.sharedservice.createSearchForm();
    this.searchFlightForm=this.sharedservice._searchCriteresForm;
  }

  resetForm(form:FormGroup){
    form.reset();
  }

  searchFlight(){
    const searchFlightValues=this.searchFlightForm;
    console.log(searchFlightValues)
  }
}
