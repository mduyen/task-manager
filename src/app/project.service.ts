import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  listProject:Project[] = [
    {id: 1, nameProject: 'Quan ly trai heo', dateStart: '2022-03-01', price: 3340000, leader: 1, member: [1,2,3]},
    {id: 2, nameProject: 'Cay xanh cong vien', dateStart: '2023-04-12', price: 3340000, leader: 1, member: [1,2,3]},
    {id: 3, nameProject: 'Website Van hoa Viet', dateStart: '2023-05-11', price: 3340000, leader: 1, member: [1,2,3]},
    {id: 4, nameProject: 'Website Du lich Bui', dateStart: '2021-03-11', price: 3340000, leader: 1, member: [1,2,3]},
    {id: 5, nameProject: 'Quan ly nha thuoc Vinh AN', dateStart: '2022-12-01', price: 3340000, leader: 1, member: [1,2,3]}, 
  ]
  constructor() { }

  getProject() {
    return this.listProject;
  }
  getOneProject(id:number=0) {
    return this.listProject.find(pj=>pj.id==id);
  }

  projectAdd(pj:Project=<Project>{}){
    this.listProject.push(pj);
  }
}
