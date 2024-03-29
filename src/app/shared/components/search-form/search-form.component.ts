import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FlightService } from 'src/app/flights/services/flight.service';
import { Flightcriteria } from '../../models/flightcriteria.model';
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
  @Output() onsearch=new EventEmitter<Flightcriteria>();

  constructor(private readonly sharedservice:SharedService,private readonly flightsService: FlightService) { }

  ngOnInit(): void {
    if (this.sharedservice.creationDone === false) {
      this.sharedservice.createSearchForm
      this.sharedservice.creationDone = true;
      this.sharedservice.creationDone=true;
    }
    this.sharedservice.createSearchForm();
    this.searchFlightForm=this.sharedservice._searchCriteresForm;
    if (this.sharedservice.haveResult) {
      this.searchFlight();
    }
    if (this.flightsService.flightCriteria) {
      this.onsearch.emit(this.flightsService.flightCriteria);
      this.flightsService.flightCriteria = null;
    }
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
    const searchFlightValues=this.searchFlightForm.value;
    if(searchFlightValues.flightType===undefined || searchFlightValues.flightType===''){
      searchFlightValues.flightType=null;
    }
    if(searchFlightValues.company===undefined || searchFlightValues.company===''){
      searchFlightValues.company=null;
    }
    if(searchFlightValues.travelType===undefined || searchFlightValues.travelType===''){
      searchFlightValues.travelType=null;
    }
    this.onsearch.emit(searchFlightValues);

  }
}
