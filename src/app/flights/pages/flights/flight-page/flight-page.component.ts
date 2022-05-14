import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-page',
  templateUrl: './flight-page.component.html',
  styleUrls: ['./flight-page.component.css']
})
export class FlightPageComponent implements OnInit {
  isHidden=false;

  constructor() { }

  ngOnInit(): void {
  }

  hideSearchForm(){
    this.isHidden=!this.isHidden
  }

}
