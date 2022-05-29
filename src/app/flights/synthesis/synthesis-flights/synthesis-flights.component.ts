import { Component, Input, OnInit } from '@angular/core';
import { Synthesiscriteria } from 'src/app/shared/models/synthesiscriteria.model';

@Component({
  selector: 'app-synthesis-flights',
  templateUrl: './synthesis-flights.component.html',
  styleUrls: ['./synthesis-flights.component.css']
})
export class SynthesisFlightsComponent implements OnInit {
  @Input() nbrFlights:number;
  @Input() synthesisCriteria: Synthesiscriteria;


  constructor() { }

  ngOnInit(): void {
  }

}
