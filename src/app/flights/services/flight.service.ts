import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { Flight } from 'src/app/shared/models/flight.model';
import { Flightcriteria } from 'src/app/shared/models/flightcriteria.model';
import { SynthesisCompany } from 'src/app/shared/models/synthesis-company.model';
import { Synthesiscriteria } from 'src/app/shared/models/synthesiscriteria.model';

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
    return this.http.get<Bookmark>(this.API_URL+'/bookmarks/'+idBookmark);
  }
  delAllBookmar(){
    return this.http.delete<Bookmark>(this.API_URL+'/bookmarks')
  }

  viewBookmark(idBookmark: number): void {
    this.getBookmark(idBookmark).subscribe(bookmark => {
      this.flightCriteria = bookmark.flightCriteria;
      this.router.navigate(['/flights']);
      
    })
  }

  deleteBookmark(idBookmark: number):Observable<any> {
    console.log(idBookmark)
    return this.http.delete<Bookmark>(this.API_URL+'/bookmarks/'+idBookmark);
  }

  getNumberOfFlights(synthesisCriteria:Synthesiscriteria):Observable<number>{
    return this.http.post<number>(this.API_URL+'/numberFlights',synthesisCriteria)
  }

  synthesisCompaniesFlights(synthesisCriteria:Synthesiscriteria):Observable<SynthesisCompany[]>{
    return this.http.post<SynthesisCompany[]>(this.API_URL+'/syntheseCompanyFlights',synthesisCriteria)

  }
}
