import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { Route } from '@angular/router';


@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent {
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
}
