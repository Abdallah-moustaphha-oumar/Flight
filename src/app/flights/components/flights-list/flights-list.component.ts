import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Flight } from 'src/app/shared/models/flight.model';
import { FlightService } from '../../services/flight.service';

const Element_Data: Flight[] = [
  {
    idFlight: 1,
    companyName: 'Air France',
    flightType: 'Direct Flight',
    travelType: 'Round Trip',
    departureDate: new Date(),
    departureTime: new Date(),
    arrivalDate: new Date(),
    arrivalTime: new Date(),
    backDate: new Date(),
    backTime: new Date(),
    departureLocation: 'Paris',
    arrivalLocation:'London',
    flightDuration: new Date(),
    connectionDuration: new Date(),
    aircraftType: 'Airbas',
  },
  {
    idFlight: 2,
    companyName: 'Air France',
    flightType: 'Direct Flight',
    travelType: 'Round Trip',
    departureDate: new Date(),
    departureTime: new Date(),
    arrivalDate: new Date(),
    arrivalTime: new Date(),
    backDate: new Date(),
    backTime: new Date(),
    departureLocation: 'Paris',
    arrivalLocation:'London',
    flightDuration: new Date(),
    connectionDuration: new Date(),
    aircraftType: 'Airbas',
  },
  {
    idFlight: 3,
    companyName: 'Air France',
    flightType: 'Direct Flight',
    travelType: 'Round Trip',
    departureDate: new Date(),
    departureTime: new Date(),
    arrivalDate: new Date(),
    arrivalTime: new Date(),
    backDate: new Date(),
    backTime: new Date(),
    departureLocation: 'Paris',
    arrivalLocation:'London',
    flightDuration: new Date(),
    connectionDuration: new Date(),
    aircraftType: 'Airbas',
  },
  {
    idFlight: 4,
    companyName: 'Air France',
    flightType: 'Direct Flight',
    travelType: 'Round Trip',
    departureDate: new Date(),
    departureTime: new Date(),
    arrivalDate: new Date(),
    arrivalTime: new Date(),
    backDate: new Date(),
    backTime: new Date(),
    departureLocation: 'Paris',
    arrivalLocation:'London',
    flightDuration: new Date(),
    connectionDuration: new Date(),
    aircraftType: 'Airbas',
  },
  {
    idFlight: 5,
    companyName: 'Air France',
    flightType: 'Direct Flight',
    travelType: 'Round Trip',
    departureDate: new Date(),
    departureTime: new Date(),
    arrivalDate: new Date(),
    arrivalTime: new Date(),
    backDate: new Date(),
    backTime: new Date(),
    departureLocation: 'Paris',
    arrivalLocation:'London',
    flightDuration: new Date(),
    connectionDuration: new Date(),
    aircraftType: 'Airbas',
  },
  {
    idFlight: 6,
    companyName: 'Air France',
    flightType: 'Direct Flight',
    travelType: 'Round Trip',
    departureDate: new Date(),
    departureTime: new Date(),
    arrivalDate: new Date(),
    arrivalTime: new Date(),
    backDate: new Date(),
    backTime: new Date(),
    departureLocation: 'Paris',
    arrivalLocation:'London',
    flightDuration: new Date(),
    connectionDuration: new Date(),
    aircraftType: 'Airbas',
  }
]
@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {
  @Input()
  flights = new MatTableDataSource<Flight>();
  selectedflights = new MatTableDataSource<Flight>();
  flightsTemp = new MatTableDataSource<Flight>();
  displayBackButton=false


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) matsort: MatSort;
  


  
  displayedColumns:string[]=[
    'idFlight',
    'companyName',
    'flightType',
    'travelType',
    'departureDate',
    'departureTime',
    'arrivalDate',
    'arrivalTime',
    'backDate',
    'backTime',
    'departureLocation',
    'arrivalLocation',
    'flightDuration',
    'connectionDuration',
    'aircraftType',
    'select'];

  constructor( private FlighService:FlightService) { }

  ngOnInit(): void {
    this.flights.paginator = this.paginator;
    this.flights.sort = this.matsort;
    this.flightsTemp = this.flights;
   

  }

  getSelectedFlight(){
    this.selectedflights.paginator=this.paginator;
    this.flights=this.selectedflights;
    this.displayBackButton = true;


  }

  ifRowExist(row?: Flight):any{
    for (let i = 0; i < this.selectedflights.data.length; ++i) {
      if (this.selectedflights.data[i].idFlight === row.idFlight) {
        this.selectedflights.data.splice(i, 1);
        return true;
      }
    }
  }

  addRow(row?: Flight){
    if (!this.ifRowExist(row)) {
    this.selectedflights.data.push(row);
    }
  }

  backToResultList() {
    this.flightsTemp.paginator = this.paginator;
    this.flights = this.flightsTemp;
    this.displayBackButton = false;
  }

}
