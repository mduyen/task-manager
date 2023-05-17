import { Component } from '@angular/core';
import { Staff } from '../staff';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent {
  listStaff:Staff[] = [
    {id: 1, lastName: 'nguyen', firstName: 'duyn', dateOfBirth: '2003-17-03', gender: true, area: 'brvt'},
    {id: 2, lastName: 'nguyen', firstName: 'duyn', dateOfBirth: '2003-17-03', gender: true, area: 'brvt'},
    {id: 3, lastName: 'nguyen', firstName: 'duyn', dateOfBirth: '2003-17-03', gender: true, area: 'brvt'},
    {id: 4, lastName: 'nguyen', firstName: 'duyn', dateOfBirth: '2003-17-03', gender: true, area: 'brvt'},
    {id: 5, lastName: 'nguyen', firstName: 'duyn', dateOfBirth: '2003-17-03', gender: true, area: 'brvt'},
  ]
}
