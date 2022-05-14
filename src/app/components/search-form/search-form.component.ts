import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchFlightForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.searchFlightForm=new FormGroup({
      company:new FormControl(''),
      backDateMin:new FormControl(''),
      flightType:new FormControl(''),
      travelType:new FormControl(''),
      departureLocation:new FormControl(''),
      arrivalLocation:new FormControl(''),
      departureDateMin:new FormControl(''),
      arrivalDateMin:new FormControl(''),
      departureTimeMin:new FormControl(''),
      arrivalTimeMin:new FormControl(''),
      backTimeMin:new FormControl(''),
      flightDurationMin:new FormControl(''),
      connectionDurationMin:new FormControl(''),
      departureDateMax:new FormControl(''),
      arrivalDateMax:new FormControl(''),
      backDateMax:new FormControl(''),
      departureTimeMax:new FormControl(''),
      arrivalTimeMax:new FormControl(''),
      backTimeMax:new FormControl(''),
      flightDurationMax:new FormControl(''),
      connectionDurationMax:new FormControl(''),
      aircraftType:new FormControl(''),
      fareMin:new FormControl(''),
      fareMax:new FormControl(''),


    });
  }

  resetForm(form:FormGroup){
    form.reset();
  }

}
