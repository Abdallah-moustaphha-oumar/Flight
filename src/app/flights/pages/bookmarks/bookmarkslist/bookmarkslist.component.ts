import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FlightService } from 'src/app/flights/services/flight.service';
import { Bookmark } from 'src/app/shared/models/bookmark.model';


@Component({
  selector: 'app-bookmarkslist',
  templateUrl: './bookmarkslist.component.html',
  styleUrls: ['./bookmarkslist.component.css'],
  animations:[
    trigger("listAnimation",[
      transition("* => *",[
        query(
          ":leave",
          [
            style({tranform: 'translateX(0)', opacity: 1}),
            animate('1000ms',style({tranform: 'translateX(100%)', opacity: 0}))
          ],
          {optional : true}
        )
      ])

    ])
  ]
})
export class BookmarkslistComponent implements OnInit {
  bookmarks = new MatTableDataSource<Bookmark>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) matSort: MatSort;

  displayedColumns: string[] = [
    'idBookmark',
    'title',
    'addingDate',
    'nbFlights',
    'view'
    ];

  constructor(private flightservice:FlightService,private readonly Dialogue:MatDialog) { }

  ngOnInit(): void {
    this.bookmarks.paginator = this.paginator;
    this.bookmarks.sort = this.matSort;
    this.flightservice.getBookmarkList().subscribe(bookmarks => {
    this.bookmarks.data = bookmarks;
     })
  }

  viewBookmark(idBookmark: number) {
    this.flightservice.viewBookmark(idBookmark);
  }
  openDialogueWithRef(ref:TemplateRef<any>){
    this.Dialogue.open(ref)

  }
  deleteBookmark(book:Bookmark){
    this.flightservice.deleteBookmark(book.idBookmark).subscribe(data=>{
      const newData=this.bookmarks.data;
      newData.splice(newData.indexOf(book),1)
      this.bookmarks.data=newData;

    });
    //)
  }

  DeleteAllBookMark(){
    this.flightservice.delAllBookmar().subscribe(data=>{
      const newData=this.bookmarks.data
      newData.splice(0,this.bookmarks.data.length)
      this.bookmarks.data=newData
    });
  }

}
