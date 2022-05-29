import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Synthesiscriteria } from 'src/app/shared/models/synthesiscriteria.model';
import { SharedService } from 'src/app/shared/services/shared.service';


@Component({
  selector: 'app-synthesis-criteria',
  templateUrl: './synthesis-criteria.component.html',
  styleUrls: ['./synthesis-criteria.component.css']
})
export class SynthesisCriteriaComponent implements OnInit {
  synthesisForm:FormGroup
  @Output() onSearch = new EventEmitter<Synthesiscriteria>() 

  constructor(private readonly sharedservice:SharedService) { }

  ngOnInit(): void {
    if (this.sharedservice.syntheseCreationDone === false) {
      this.sharedservice.createSynthesisCriteriaForm()
      this.sharedservice.syntheseCreationDone=true;
    }
    this.synthesisForm=this.sharedservice._synthesisForm;
  }

  doSynthesis(){
    const synthesisCriteriaValues=this.synthesisForm.value
    this.onSearch.emit(synthesisCriteriaValues)
    console.log(synthesisCriteriaValues)
    
  }

}
