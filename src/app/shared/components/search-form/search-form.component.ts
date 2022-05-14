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
  showConnection = true;
  showback=true;
  //company: string;
  //flightType: string;

  constructor(private readonly sharedservice:SharedService) { }

  ngOnInit(): void {
    this.sharedservice.createSearchForm();
    this.searchFlightForm=this.sharedservice._searchCriteresForm;
  }

  resetForm(form:FormGroup){
    form.reset();
  }

  selectedFlightType(value) {
    if (value === "Direct Flight") {
      this.showConnection = false;
    }
    else {
      this.showConnection = true;
    }
  }

  selectedTripType(value) {
    if (value === "One-way ticket") {
      this.showback = false;
    }
    else {
      this.showConnection = true;
    }
  }

  searchFlight(){
    const searchFlightValues=this.searchFlightForm;
    console.log(searchFlightValues)
  }
}
