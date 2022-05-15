import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  bookmarkspage(){
    this.router.navigate(['/bookmarks'])
  }

  flightspage(){
    this.router.navigate(['/flights'])
  }
}
