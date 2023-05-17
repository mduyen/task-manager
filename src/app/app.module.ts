import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { StaffAddComponent } from './staff-add/staff-add.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffListComponent,
    ProjectListComponent,
    ProjectAddComponent,
    ProjectEditComponent,
    TaskListComponent,
    TaskAddComponent,
    TaskEditComponent,
    StaffListComponent,
    StaffAddComponent,
    StaffEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
