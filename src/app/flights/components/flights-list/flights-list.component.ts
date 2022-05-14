import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Flight } from 'src/app/shared/models/flight.model';

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
  flights = new MatTableDataSource<Flight>(Element_Data);

  constructor() { }

  ngOnInit(): void {
    this.flights.paginator = this.paginator;
    this.flights.sort = this.matsort;

  }

}
