import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authemtication/services/authentication.service';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {

  constructor(private readonly router: Router,private authservice:AuthenticationService) { }

  ngOnInit(): void {
  }

  bookmarkspage(){
    this.router.navigate(['/bookmarks'])
  }

  flightspage(){
    this.router.navigate(['/flights'])
  }
  logout(){
    this.authservice.removeTokens();
    this.router.navigate(['authentification/login'])

  }
}
