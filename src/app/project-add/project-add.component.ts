import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { Project } from '../project';
import { ProjectService } from '../project.service';
// import { Route } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent {
  constructor(private d:DuLieuService, private router: Router) {}

  listStaff:any;
  
  ngOnInit():void{
    this.d.getStaff().subscribe(data => this.listStaff = data);
  }
  
  addProject(da:any) {
    this.d.addProject(da).subscribe (data => alert ('Thêm dự án thành công'));
    this.router.navigate(['/list-project'])
  }
}
  // constructor(
  //   private projectService: ProjectService,
  //   private router:Route,
  // ) {}
  // pj:Project = <Project>{};
  // projectAdd(){
  //   this.projectService.projectAdd(this.pj);
  //   this.router.navigate(['/admin/pj'])
  // }
  // ngOnInit(): void {
  // }
  // }

