import { Component } from '@angular/core';
import { DuLieuService } from '../../du-lieu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-add',
  templateUrl: './staff-add.component.html',
  styleUrls: ['./staff-add.component.css']
})
export class StaffAddComponent {
  constructor(private d:DuLieuService, private route: Router) {}

  listStaff:any;
  
  ngOnInit():void{
    this.d.getStaff().subscribe(data => this.listStaff = data);
  }
  
  addStaff(nv:any) {
    this.d.addStaff(nv).subscribe (data => alert ('Thêm nhân viên thành công'));
    this.route.navigate(['/list-staff']);
  }
}

