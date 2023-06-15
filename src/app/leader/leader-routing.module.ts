import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderComponent } from './leader.component';
import { FormsModule } from '@angular/forms';

import { ProjectListComponent } from './project-list/project-list.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { StaffAddComponent } from './staff-add/staff-add.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';


// import { ProjectAddComponent } from '../project-add/project-add.component';
// import { ProjectEditComponent } from '../project-edit/project-edit.component';
// import { ProjectListComponent } from '../project-list/project-list.component';
// import { StaffAddComponent } from './staff-add/staff-add.component';
// import { StaffEditComponent } from './staff-edit/staff-edit.component';
// import { StaffListComponent } from '../staff-list/staff-list.component';
// import { TaskAddComponent } from '../task-add/task-add.component';
// import { TaskEditComponent } from './task-edit/task-edit.component';
// import { TaskListComponent } from '../task-list/task-list.component';

const routes: Routes = [{ path: '', component: LeaderComponent },
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
                        {
                          path: 'list-project/edit/:id',
                          component: ProjectEditComponent
                        },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderRoutingModule { }
