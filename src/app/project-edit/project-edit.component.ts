import { Component } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent {
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

  // editProject() {
  //   this.d.editProject(this.project).subscribe(data=> 
  //     alert('Sửa dự án thành công'))
  // }
  editProject() {
    this.d.editProject(this.project).subscribe(data=> {
      alert('Sửa dự án thành công')
      this.router.navigate(['/list-project'])
  })
  }
}
