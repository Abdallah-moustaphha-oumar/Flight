import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { FlightService } from 'src/app/flights/services/flight.service';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { Flight } from 'src/app/shared/models/flight.model';
import { Flightcriteria } from 'src/app/shared/models/flightcriteria.model';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-flight-page',
  templateUrl: './flight-page.component.html',
  styleUrls: ['./flight-page.component.css']
})
export class FlightPageComponent implements OnInit {
  show=false;
  loading=false;
  nb:number;
  isHidden=false;
  flightsData=new MatTableDataSource<Flight>();
  flightCriteria:Flightcriteria
  hp:MatSnackBarHorizontalPosition='center'
  vp:MatSnackBarVerticalPosition='top'

  constructor(private flightService:FlightService,private readonly sharedService: SharedService,
    private readonly _snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  hideSearchForm(){
    this.isHidden=!this.isHidden
  }

  searchFlights(f:Flightcriteria){
    this.flightCriteria=f
    this.isHidden=true;
    this,this.loading=true;
    this.flightService.searchFlights(f).subscribe(data=>{
      this.nb=data.length;
      this.flightsData.data=data;
      this.loading=false;
      if(this.nb===0){
        this.show=false;
        this.isHidden=false;
      }else{
        this.sharedService.haveResult=true;
        this.show=true;

      }
    })

  }

  addBookmark(title: string) {
    const bookmark: Bookmark = new Bookmark();
    bookmark.title = title;
    bookmark.addingDate = new Date();
    bookmark.flightCriteria = this.flightCriteria;
    this.flightService.addBookmark(bookmark).subscribe(data=>{
      console.log(data)
      this._snackBar.open('Book Mark added succesfully',null,
      {duration:2000,
      horizontalPosition:this.hp,
      verticalPosition:this.vp,
      panelClass:['blu-snackbar']});

    });
  }

}
