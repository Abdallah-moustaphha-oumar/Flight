import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/shared/models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  readonly API_URL='http://localhost:8080/flight-webservices/api/v1.0/flights'

  constructor(private readonly http:HttpClient) { }

  getFlightList():Observable<Flight[]>{
    return this.http.get<Flight[]>(this.API_URL);

  }
}