import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FlightService } from 'src/app/flights/services/flight.service';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
const Element_Data: Bookmark[] = [
  {
    idBookmark:1,
    title:'title 1',
    addingDate:new Date(),
    nbFlights:5,
    flightCriteria:null
  },
  {
    idBookmark:2,
    title:'title 2',
    addingDate:new Date(),
    nbFlights:3,
    flightCriteria:null
  }]

@Component({
  selector: 'app-bookmarkslist',
  templateUrl: './bookmarkslist.component.html',
  styleUrls: ['./bookmarkslist.component.css']
})
export class BookmarkslistComponent implements OnInit {
  bookmarks = new MatTableDataSource<Bookmark>(Element_Data);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) matSort: MatSort;

  displayedColumns: string[] = [
    'idBookmark',
    'title',
    'addingDate',
    'nbFlights',
    'view'
    ];

  constructor(private flightservice:FlightService) { }

  ngOnInit(): void {
    this.bookmarks.paginator = this.paginator;
    this.bookmarks.sort = this.matSort;
   // this.flightservice.getBookmarkList().subscribe(bookmarks => {
     // this.bookmarks.data = bookmarks;
    //})
  }

  viewBookmark(idBookmark: number) {
    this.flightservice.viewBookmark(idBookmark);
  }

}
