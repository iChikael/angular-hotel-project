import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-page-scheduler',
  templateUrl: './page-scheduler.component.html',
  styleUrls: ['./page-scheduler.component.scss']
})
export class PageSchedulerComponent implements OnInit{

  year: number;
  month: number;
  day: number;
  // currentsearch: ChangeReservationArg;
  // sub: Subscription;
  // rooms: RoomDto[];
  // bookings: BookingDto[];

  ngOnInit() { }

  constructor(private dialog: MatDialog,
    //  private service: ReservationService
    private cd: ChangeDetectorRef) {
    // const d = new Date();
    const d = new Date();
    this.year = d.getFullYear();
    this.month = d.getMonth() + 1;
    this.day = d.getDate();
    // this.rooms = [];
    // this.bookings = [];
   }

}
