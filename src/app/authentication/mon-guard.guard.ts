import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authemtication/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MonGuardGuard implements CanActivate {
  constructor(private router:Router,private authservice:AuthenticationService){}
  canActivate(){
    if(this.authservice.isLoggedIn()){
      this.router.navigate(['/flights'])
    }
    return !this.authservice.isLoggedIn()
  }
   
  
}
