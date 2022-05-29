import { Component, OnInit } from '@angular/core';
import { SynthesisCompany } from 'src/app/shared/models/synthesis-company.model';
import { Synthesiscriteria } from 'src/app/shared/models/synthesiscriteria.model';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-synthesis',
  templateUrl: './synthesis.component.html',
  styleUrls: ['./synthesis.component.css']
})
export class SynthesisComponent implements OnInit {
  synthesisCriteria: Synthesiscriteria;
  nbFlights: number
  loading = false;
  show = false;
  synthesisCompanies:SynthesisCompany[]=[]

  constructor(private readonly flightService: FlightService) { }

  ngOnInit(): void {
  }

  dosynthesis(synthesisCriteria: Synthesiscriteria) {
    this.loading=true;
    this.synthesisCriteria = synthesisCriteria
    this.flightService.getNumberOfFlights(synthesisCriteria).subscribe(data => {
      this.nbFlights = data
      this.loading=false;
      if (this.nbFlights === 0) {
        this.show = false
      } else {
        this.show = true
      }
    })

    this.flightService.synthesisCompaniesFlights(synthesisCriteria).subscribe(data=>{
      this.synthesisCompanies=data
    })

  }

}
