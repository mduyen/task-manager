import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LeaderRoutingModule } from './leader-routing.module';
import { LeaderComponent } from './leader.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffAddComponent } from './staff-add/staff-add.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';


@NgModule({
  declarations: [
    LeaderComponent,
    ProjectListComponent,
    ProjectEditComponent,
    ProjectAddComponent,
    StaffListComponent,
    StaffAddComponent,
    StaffEditComponent,
    TaskListComponent,
    TaskAddComponent,
    TaskEditComponent
  ],
  imports: [
    CommonModule,
    LeaderRoutingModule,
    FormsModule
  ]
})
export class LeaderModule { }
