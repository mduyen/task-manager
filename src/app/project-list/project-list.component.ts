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
    {id: 2, nameProject: 'Quan ly trai heo', dateStart: '2022-03-01', price: 3340000, leader: 1, member: [1,2,3]},
    {id: 3, nameProject: 'Quan ly trai heo', dateStart: '2022-03-01', price: 3340000, leader: 1, member: [1,2,3]},
    {id: 4, nameProject: 'Quan ly trai heo', dateStart: '2022-03-01', price: 3340000, leader: 1, member: [1,2,3]},
    {id: 5, nameProject: 'Quan ly trai heo', dateStart: '2022-03-01', price: 3340000, leader: 1, member: [1,2,3]}, 
  ]
}

