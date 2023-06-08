import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DuLieuService {

  constructor(private h:HttpClient) { }
  getProject() {return this.h.get('http://localhost:3000/project')}

  addProject(da:any) {return this.h.post('http://localhost:3000/project', da)}
  
  editProject(da:any) {return this.h.put('http://localhost:3000/project/' + da.id, da)}
  
  deleteProject(id:number) {return this.h.delete('http://localhost:3000/project/' + id)}

  getOneProject(id:number) {return this.h.get('http://localhost:3000/project/' + id)}


  getStaff() {return this.h.get('http://localhost:3000/staff')}

  addStaff(nv:any) {return this.h.post('http://localhost:3000/staff', nv)}
  
  editStaff(nv:any) {return this.h.put('http://localhost:3000/staff/' + nv.id, nv)}
  
  deleteStaff(id:number) {return this.h.delete('http://localhost:3000/staff/' + id)}


  getTask() {return this.h.get('http://localhost:3000/task')}

  addTask(ta:any) {return this.h.post('http://localhost:3000/task', ta)}
  
  editTask(ta:any) {return this.h.put('http://localhost:3000/task/' + ta.id, ta)}
  
  deleteTask(id:number) {return this.h.delete('http://localhost:3000/task/' + id)}

}
