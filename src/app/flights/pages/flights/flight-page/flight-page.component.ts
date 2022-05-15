import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FlightService } from 'src/app/flights/services/flight.service';
import { Flight } from 'src/app/shared/models/flight.model';
import { Flightcriteria } from 'src/app/shared/models/flightcriteria.model';

@Component({
  selector: 'app-flight-page',
  templateUrl: './flight-page.component.html',
  styleUrls: ['./flight-page.component.css']
})
export class FlightPageComponent implements OnInit {
  isHidden=false;
  flightsData=new MatTableDataSource<Flight>();

  constructor(private flightService:FlightService) { }

  ngOnInit(): void {
  }

  hideSearchForm(){
    this.isHidden=!this.isHidden
  }

  searchFlights(f:Flightcriteria){
    this.flightService.searchFlights(f).subscribe(data=>{
      this.flightsData.data=data;
    })

  }

}
