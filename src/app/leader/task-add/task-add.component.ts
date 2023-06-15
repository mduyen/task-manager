import { Component } from '@angular/core';
import { DuLieuService } from '../../du-lieu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {
  constructor(private d:DuLieuService, private route: Router) {}

  listProject:any;
  listStaff:any;
  
  ngOnInit():void{
    this.d.getProject().subscribe(data => this.listProject = data);

    this.d.getStaff().subscribe(data => this.listStaff = data);
  }
  
  

  addTask(ta:any) {
    this.d.addTask(ta).subscribe (data => alert ('Thêm nhiệm vụ thành công!'));
    this.route.navigate(['/list-task']);
  }
}



