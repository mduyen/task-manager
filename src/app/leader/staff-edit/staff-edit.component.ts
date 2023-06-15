import { Component } from '@angular/core';
import { DuLieuService } from '../../du-lieu.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent {
  constructor(
    private d:DuLieuService, 
    private router: Router,
    private route:ActivatedRoute
    ) {}

  listStaff:any;
  project:any;
  
  ngOnInit():void{
    this.d.getStaff().subscribe(data => this.listStaff = data);
    let id = this.route.snapshot.params['id'];
    this.d.getOneProject(id).subscribe(data=>this.project = data)
  }

  editStaff() {
    this.d.editStaff(this.project).subscribe(data=> 
      alert('Sửa dự án thành công'))
  }
}
