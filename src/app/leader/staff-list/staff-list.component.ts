import { Component } from '@angular/core';
import { DuLieuService } from '../../du-lieu.service';
import { Staff } from '../../staff';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent {

  constructor(private d:DuLieuService, private router: Router) {}
  listStaff:any;
  ngOnInit(): void {
    this.d.getStaff().subscribe ( data => this.listStaff = data);
  }

  deleteStaff(id:number) {
    if (confirm ('Xóa nhé?') ==true) {
      this.d.deleteStaff(id).subscribe(data => {
        alert('Xóa dự án thành công!');
        this.router.navigate(['/list-staff'])
    })
  }
}

  
  // listStaff:Staff[] = [
  //   {id: 1, lastName: 'nguyen', firstName: 'duyn', dateOfBirth: '2003-17-03', gender: true, area: 'brvt'},
  //   {id: 2, lastName: 'tran', firstName: 'nhi', dateOfBirth: '2003-17-03', gender: false, area: 'brvt'},
  //   {id: 3, lastName: 'le', firstName: 'duyn', dateOfBirth: '2003-17-03', gender: true, area: 'brvt'},
  //   {id: 4, lastName: 'bui', firstName: 'duyn', dateOfBirth: '2003-17-03', gender: true, area: 'brvt'},
  //   {id: 5, lastName: 'nguyen', firstName: 'duyn', dateOfBirth: '2003-17-03', gender: false, area: 'brvt'},
  // ]
  // constructor() {}
  // stafflist:string='';
  // LStaff:Staff[]=[];
  // ngOnInit():void {
  //   this.LStaff=this.listStaff;
  // }
  // checkStaff() {
  //   console.log(this.stafflist);
  //   this.listStaff=this.LStaff.filter(p=>p.lastName.includes(this.stafflist));
  // }
}
