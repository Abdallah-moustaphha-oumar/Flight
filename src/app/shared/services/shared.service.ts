import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  _searchCriteresForm:FormGroup;

  constructor() { }

  createSearchForm(){
    this._searchCriteresForm=new FormGroup({
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
}
