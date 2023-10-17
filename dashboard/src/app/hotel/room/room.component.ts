import { Component, OnInit, ViewChild } from '@angular/core';
import { RoomService } from '../service/room-service';
import { MatDrawer } from '@angular/material/sidenav';
import { NgForm } from '@angular/forms';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';



@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})

export class RoomComponent implements OnInit {
  name: string | undefined;
  rooms: any[] = [];
  tabs = [
    { label: 'Tầng 1' },
    { label: 'Tầng 2' },
    { label: 'Tầng 3' }
  ];

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  @ViewChild('drawer') drawer!: MatDrawer;
  drawerOpened: boolean | undefined;

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.getAllRooms().subscribe(
      (rooms: any[]) => {
        this.rooms = rooms; 
      },
      (error) => {
        console.error(error);
      }
    );
  }

  openDrawer() {
    this.drawer.open();
  }

  onConfirm(form: NgForm) {
    if (form.valid) {
    }
  }

  onClose() {
  }

  // toggleDrawer() {
  //   this.drawerOpened = !this.drawerOpened;
  // }

  toggleDrawer(room: any) {
    room.drawerOpened = !room.drawerOpened;
  }

}