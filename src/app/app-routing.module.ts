import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { HomeComponent } from './home/home.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { StaffAddComponent } from './staff-add/staff-add.component';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'list-project',
    component: ProjectListComponent
  },
  {
    path: 'list-staff',
    component: StaffListComponent
  },
  {
    path: 'list-task',
    component: TaskListComponent
  },
  {
    path: 'add-project',
    component: ProjectAddComponent
  },
  {
    path: 'add-task',
    component: TaskAddComponent
  },
  {
    path: 'add-staff',
    component: StaffAddComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
