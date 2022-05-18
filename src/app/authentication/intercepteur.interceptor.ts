import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authemtication/services/authentication.service';

@Injectable()
export class IntercepteurInterceptor implements HttpInterceptor {

  constructor(private readonly authservice:AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    request = this.addToken(request, this.authservice.getJwtToken());
    
    return next.handle(request);
  }

  addToken(request: HttpRequest<any>,token:string){
    return request.clone({
      setHeaders:{
        'Authorization': 'Bearer '+token
      }
    });

  }
}
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: IntercepteurInterceptor, multi: true }
];
