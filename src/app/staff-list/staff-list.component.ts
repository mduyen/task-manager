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
    {id: 2, lastName: 'tran', firstName: 'nhi', dateOfBirth: '2003-17-03', gender: false, area: 'brvt'},
    {id: 3, lastName: 'le', firstName: 'duyn', dateOfBirth: '2003-17-03', gender: true, area: 'brvt'},
    {id: 4, lastName: 'bui', firstName: 'duyn', dateOfBirth: '2003-17-03', gender: true, area: 'brvt'},
    {id: 5, lastName: 'nguyen', firstName: 'duyn', dateOfBirth: '2003-17-03', gender: false, area: 'brvt'},
  ]
  constructor() {}
  stafflist:string='';
  LStaff:Staff[]=[];
  ngOnInit():void {
    this.LStaff=this.listStaff;
  }
  checkStaff() {
    console.log(this.stafflist);
    this.listStaff=this.LStaff.filter(p=>p.lastName.includes(this.stafflist));
  }
}
