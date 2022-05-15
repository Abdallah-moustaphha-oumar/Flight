import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { Flight } from 'src/app/shared/models/flight.model';
import { Flightcriteria } from 'src/app/shared/models/flightcriteria.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  readonly API_URL='http://localhost:8080/flight-webservices/api/v1.0/flights';
  flightCriteria: Flightcriteria;

  constructor(private readonly http:HttpClient,private readonly router: Router) { }

  getFlightList():Observable<Flight[]>{
    return this.http.get<Flight[]>(this.API_URL);

  }
  searchFlights(flightCriteria: Flightcriteria): Observable<Flight[]> {
    return this.http.post<Flight[]>(this.API_URL, flightCriteria);
  }

  addBookmark(bookmark:Bookmark):Observable<Bookmark> {
    return this.http.post<Bookmark>(this.API_URL+'/bookmarks',bookmark)
  }

  getBookmarkList(): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>(this.API_URL + '/bookmarks');
  }

  getBookmark(idBookmark: number): Observable<Bookmark> {
    return this.http.get<Bookmark>(`${this.API_URL}/bookmarks/${idBookmark}`);
  }

  viewBookmark(idBookmark: number): void {
    this.getBookmark(idBookmark).subscribe(bookmark => {
      this.flightCriteria = bookmark.flightCriteria;
      this.router.navigate(['/flights']);
      
    })
  }
}
