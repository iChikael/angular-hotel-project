import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
  { state: 'booking', name: 'Booking', type: 'link', icon: 'av_timer' },
  { state: 'room', name: 'Room', type: 'link', icon: 'av_timer' },
  { state: 'report', name: 'GuestReport', type: 'link', icon: 'av_timer' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
