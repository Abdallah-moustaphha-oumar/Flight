import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, mapTo, Observable, of, tap } from 'rxjs';
import { Loginrequest } from 'src/app/shared/models/loginrequest.model';
import { Loginresponse } from 'src/app/shared/models/loginresponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  readonly API_URL='http://localhost:8080/flight-webservices/api/v1.0/flights';

  private readonly JWT_TOKEN = 'JWT_TOKEN';

  constructor(private http: HttpClient, private router: Router) { }

  storeTokens(loginResponse: Loginresponse) {
    localStorage.setItem(this.JWT_TOKEN, loginResponse.token);
  }

  removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
  }

  getJwtToken():string{
    return localStorage.getItem(this.JWT_TOKEN);
  }

  isLoggedIn(){
    return !!this.getJwtToken()
  }

  login(loginRequest: Loginrequest): Observable<boolean> {
    return this.http.post<Loginresponse>(this.API_URL+'/authenticate', loginRequest)
      .pipe(
        tap(loginresponse => this.storeTokens(loginresponse)
        ),
        mapTo(true),
        catchError(error => {
          return of(false);
        })
      );
  }
}
