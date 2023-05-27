import { Component } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  listProject:Project[] = [
    {id: 1, nameProject: 'Quan ly trai heo', dateStart: '2022-03-01', price: 3340000, leader: 1, member: [1,2,3]},
    {id: 2, nameProject: 'Cay xanh cong vien', dateStart: '2023-04-12', price: 3340000, leader: 1, member: [1,2,3]},
    {id: 3, nameProject: 'Website Van hoa Viet', dateStart: '2023-05-11', price: 3340000, leader: 1, member: [1,2,3]},
    {id: 4, nameProject: 'Website Du lich Bui', dateStart: '2021-03-11', price: 3340000, leader: 1, member: [1,2,3]},
    {id: 5, nameProject: 'Quan ly nha thuoc Vinh AN', dateStart: '2022-12-01', price: 3340000, leader: 1, member: [1,2,3]}, 
  ]
  constructor() {}
  projectlist:string='';
  LProject:Project[]=[];
  ngOnInit():void {
    this.LProject = this.listProject;
  }
  checkProduct() {
    console.log(this.projectlist);
    this.listProject = this.LProject.filter(p=>p.nameProject.includes(this.projectlist))
  }


}

