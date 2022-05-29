import { Component, Input, OnInit } from '@angular/core';
import { SynthesisCompany } from 'src/app/shared/models/synthesis-company.model';

@Component({
  selector: 'app-synthesis-company',
  templateUrl: './synthesis-company.component.html',
  styleUrls: ['./synthesis-company.component.css']
})
export class SynthesisCompanyComponent implements OnInit {
  @Input() synthesisCompanies:SynthesisCompany[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
